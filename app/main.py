import datetime
import json
import os
from pathlib import Path
from fastapi import FastAPI, Request, Depends, HTTPException
from fastapi.responses import RedirectResponse, HTMLResponse
from sqlalchemy.orm import Session
from typing import List

from . import models, schemas
from .database import engine, get_db
from .google_sheets import fetch_sheet_data, get_sheet_headers

#models.Base.metadata.create_all(bind=engine)

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
        result = db.execute(models.sqlalchemy.text("SELECT version();")).fetchone()
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
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/google-sheets/sync")
async def sync_google_sheets(request: Request, db: Session = Depends(get_db)):
    # O payload deve conter: spreadsheet_id, sheet_name, e mapping (ex: { 'Cliente': 'Coluna A', ... })
    body = await request.json()
    spreadsheet_id = body.get("spreadsheet_id")
    sheet_name = body.get("sheet_name", "Página1")
    mapping = body.get("mapping", {})
    
    if not spreadsheet_id or not mapping:
        raise HTTPException(status_code=400, detail="Faltam parâmetros de configuração.")
    
    try:
        # 1. Busca todos os dados da planilha (Range A1:Z1000 por padrão)
        range_name = f"'{sheet_name}'!A1:Z1000"
        data = fetch_sheet_data(spreadsheet_id, range_name)
        
        if not data or len(data) < 2:
            return {"message": "Planilha vazia ou sem dados além do cabeçalho."}

        headers = data[0]
        rows = data[1:]
        
        # 2. Transforma em formato amigável para o CRM (lista de objetos)
        results = []
        for row in rows:
            entry = {}
            for target_field, source_col_name in mapping.items():
                if source_col_name in headers:
                    col_index = headers.index(source_col_name)
                    if col_index < len(row):
                        entry[target_field] = row[col_index]
            if entry:
                results.append(entry)

        return {
            "message": f"Sincronizados {len(results)} registros com sucesso!",
            "data": results
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
