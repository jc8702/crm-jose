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

# Cria as tabelas no arquivo SQLite se não existirem
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
