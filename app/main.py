import json
import os
from pathlib import Path

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from sqlalchemy import Column, DateTime, String, Text, create_engine, func
from sqlalchemy.orm import Session, declarative_base, sessionmaker

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="HACO RFID CRM")

# Serve arquivos estáticos (incluindo o HTML legado).
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")

templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

# -----------------------------
# Persistencia de estado (Neon)
# -----------------------------
DATABASE_URL = os.getenv("DATABASE_URL", "").strip() or "sqlite:///./crm_state.db"
if DATABASE_URL.startswith("postgresql://"):
    # Usa driver puro-Python (pg8000), mais estável no Python 3.14/Windows.
    DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+pg8000://", 1)

engine = create_engine(DATABASE_URL, pool_pre_ping=True, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)
Base = declarative_base()


class CRMState(Base):
    __tablename__ = "crm_state"
    state_key = Column(String(120), primary_key=True, index=True)
    payload = Column(Text, nullable=False)
    updated_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())


Base.metadata.create_all(bind=engine)


class StatePayload(BaseModel):
    payload: dict


@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/crm-legado")
def crm_legado():
    # Mantém seu HTML original intacto como "primeira versão" do projeto.
    return RedirectResponse(url="/static/haco_funcional.html", status_code=302)


@app.get("/healthz")
def healthz():
    return {"ok": True}


@app.get("/api/state/{state_key}")
def get_state(state_key: str):
    with SessionLocal() as db:
        row = db.get(CRMState, state_key)
        if not row:
            return {"found": False, "payload": None}
        try:
            payload = json.loads(row.payload)
        except json.JSONDecodeError as exc:
            raise HTTPException(status_code=500, detail=f"State payload invalido: {exc}") from exc
        return {"found": True, "payload": payload, "updated_at": row.updated_at.isoformat() if row.updated_at else None}


@app.put("/api/state/{state_key}")
def put_state(state_key: str, data: StatePayload):
    raw = json.dumps(data.payload, ensure_ascii=False)
    with SessionLocal() as db:
        row = db.get(CRMState, state_key)
        if row:
            row.payload = raw
        else:
            row = CRMState(state_key=state_key, payload=raw)
            db.add(row)
        db.commit()
    return {"ok": True}