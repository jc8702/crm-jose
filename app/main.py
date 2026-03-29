import datetime
import json
import os
import gc
from pathlib import Path
from fastapi import FastAPI, Request, Depends, HTTPException
from fastapi.responses import RedirectResponse, HTMLResponse
from sqlalchemy.orm import Session
from typing import List

from sqlalchemy import text
from . import models, schemas
from .database import engine, get_db
from .google_sheets import fetch_sheet_data, get_sheet_headers

models.Base.metadata.create_all(bind=engine)

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="HACO RFID CRM")

@app.get("/")
def read_root():
    return RedirectResponse(url="/crm-legado")

@app.get("/crm-legado", response_class=HTMLResponse)
def crm_legado():
    file_path = BASE_DIR.parent / "haco_funcional.html"
    if file_path.exists():
        return file_path.read_text(encoding="utf-8")
    return "<h1>Arquivo CRM não encontrado!</h1>"

@app.get("/healthz")
def healthz():
    return {"ok": True}

@app.get("/debug/db")
def debug_db(db: Session = Depends(get_db)):
    try:
        # Tenta executar uma consulta simples para validar a conexão e versão
        result = db.execute(text("SELECT version();")).fetchone()
        return {"database": str(result[0])}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro na conexão com o banco: {str(e)}")

# --- API Endpoints ---

@app.get("/api/oportunidades", response_model=List[schemas.OportunidadeResponse])
def get_oportunidades(db: Session = Depends(get_db)):
    return db.query(models.Oportunidade).all()

@app.post("/api/oportunidades", response_model=schemas.OportunidadeResponse)
def create_oportunidade(op: schemas.OportunidadeCreate, db: Session = Depends(get_db)):
    db_op = models.Oportunidade(**op.dict())
    db.add(db_op)
    db.commit()
    db.refresh(db_op)
    return db_op

@app.put("/api/oportunidades/{op_id}", response_model=schemas.OportunidadeResponse)
def update_oportunidade(op_id: int, op: schemas.OportunidadeCreate, db: Session = Depends(get_db)):
    db_op = db.query(models.Oportunidade).filter(models.Oportunidade.id == op_id).first()
    if not db_op:
        raise HTTPException(status_code=404, detail="Oportunidade não encontrada")
    
    op_data = op.dict(exclude_unset=True)
    for key, value in op_data.items():
        setattr(db_op, key, value)
    
    db.commit()
    db.refresh(db_op)
    return db_op

@app.delete("/api/oportunidades/{op_id}")
def delete_oportunidade(op_id: int, db: Session = Depends(get_db)):
    db_op = db.query(models.Oportunidade).filter(models.Oportunidade.id == op_id).first()
    if db_op:
        db.delete(db_op)
        db.commit()
    return {"ok": True}

# --- Sincronização de Estado (Substitui o Firebase) ---

@app.get("/api/google-sheets/headers")
def fetch_headers(spreadsheet_id: str, sheet_name: str = "Página1", db: Session = Depends(get_db)):
    try:
        headers = get_sheet_headers(spreadsheet_id, sheet_name)
        return {"headers": headers}
    except Exception as e:
        # Passa o erro detalhado para o frontend
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/debug/google-sheets")
def debug_google_sheets():
    """ Verifica se as credenciais estão sendo lidas corretamente """
    creds_json = os.getenv("GOOGLE_SHEETS_CREDENTIALS")
    creds_path = os.getenv("GOOGLE_SHEETS_CREDENTIALS_JSON_PATH")
    
    status = {
        "has_json_env": bool(creds_json),
        "has_path_env": bool(creds_path),
        "path_exists": os.path.exists(creds_path) if creds_path else False,
        "service_account_email": "Não carregado"
    }
    
    if creds_json:
        try:
            import json
            info = json.loads(creds_json)
            status["service_account_email"] = info.get("client_email", "N/A")
        except:
            status["service_account_email"] = "ERRO AO PROCESSAR JSON"
            
    return status

@app.get("/api/google-sheets/list-sheets")
def fetch_spreadsheet_sheets(spreadsheet_id: str):
    """ Retorna a lista de nomes das abas da planilha """
    try:
        from .google_sheets import list_spreadsheet_sheets
        sheets = list_spreadsheet_sheets(spreadsheet_id)
        return {"sheets": sheets}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

_header_cache = {}

@app.post("/api/google-sheets/sync")
async def sync_google_sheets(request: Request, db: Session = Depends(get_db)):
    body = await request.json()
    spreadsheet_id = body.get("spreadsheet_id")
    
    # We will accept either a single string (sheet_name) or a list of strings (sheet_names)
    sheet_names = body.get("sheet_names")
    if not sheet_names:
        single_sheet = body.get("sheet_name", "Página1")
        sheet_names = [single_sheet]
        
    mapping = body.get("mapping", {})
    skip = body.get("skip")
    limit = body.get("limit")

    if not spreadsheet_id or not mapping:
        raise HTTPException(status_code=400, detail="Faltam parâmetros de configuração.")
    
    global _header_cache
    
    results = []
    total_fetched = 0
    filtro_vendedor = body.get("vendedor_filter")
    
    # Mapeamento interno amigável para o CRM
    field_map = {
        'Cliente': 'nomeCliente',
        'Data': 'data',
        'Valor': 'valor',
        'Pedido Haco': 'pedido',
        'Código ERP': 'erp',
        'Vendedor': 'vendedor',
        'Nota Fiscal': 'notaFiscal',
        'Status Pedido': 'statusPedido',
        'Data Entrega': 'dataEntrega'
    }

    try:
        for sheet_name in sheet_names:
            cache_key = f"{spreadsheet_id}_{sheet_name}"
            headers = _header_cache.get(cache_key, [])
            
            if not headers:
                try:
                    head_data = fetch_sheet_data(spreadsheet_id, f"'{sheet_name}'!A1:Z1")
                    if head_data: 
                        headers = head_data[0]
                        _header_cache[cache_key] = headers
                except Exception as e:
                    # Fallback para a primeira aba original da planilha se a lida diretamente falhar
                    from .google_sheets import get_sheets_service
                    service = get_sheets_service()
                    metadata = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
                    first_sheet = metadata['sheets'][0]['properties']['title']
                    head_data = fetch_sheet_data(spreadsheet_id, f"'{first_sheet}'!A1:Z1")
                    if head_data: 
                        headers = head_data[0]
                        _header_cache[cache_key] = headers
            
            if not headers:
                continue # Pula abas vazias ou sem leitura com sucesso pra n quebrar a próxima

            if skip and limit:
                start_row = max(2, int(skip))
                range_name = f"'{sheet_name}'!A{start_row}:Z{start_row + int(limit) - 1}"
            else:
                range_name = f"'{sheet_name}'!A2:Z501"

            data = fetch_sheet_data(spreadsheet_id, range_name)
            rows = data if data else []
            total_fetched += len(rows)

            for row in rows:
                entry = {}
                for config_field, source_col_name in mapping.items():
                    if source_col_name and source_col_name in headers:
                        try:
                            col_index = headers.index(source_col_name)
                            if col_index < len(row):
                                crm_field = field_map.get(config_field, config_field)
                                entry[crm_field] = row[col_index]
                        except ValueError:
                            continue
                
                # Aplicar filtro de vendedor se definido
                if entry and filtro_vendedor:
                    vend_valor = str(entry.get('vendedor', '')).strip().lower()
                    filtro_valor = str(filtro_vendedor).strip().lower()
                    if vend_valor != filtro_valor:
                        continue
                        
                if entry:
                    entry['abaGoogleSheets'] = sheet_name
                    results.append(entry)

        gc.collect()
        return {
            "message": f"Sincronizados {len(results)} registros com sucesso!",
            "data": results,
            "fetched_count": total_fetched
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro na sincronização: {str(e)}")

@app.get("/api/sync")
def get_sync_state(db: Session = Depends(get_db)):
    state = db.query(models.CRMState).filter(models.CRMState.id == 1).first()
    if state and state.data:
        return state.data
    return {}

@app.post("/api/sync")
async def save_sync_state(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    state = db.query(models.CRMState).filter(models.CRMState.id == 1).first()
    if not state:
        state = models.CRMState(id=1, data=data)
        db.add(state)
    else:
        state.data = data
        state.updated_at = datetime.datetime.utcnow()
    db.commit()
    return {"message": "Sincronizado com sucesso!"}
