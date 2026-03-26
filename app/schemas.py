from pydantic import BaseModel
from typing import Optional, List, Any
from datetime import datetime

# --- Oportunidade ---
class OportunidadeBase(BaseModel):
    nome_projeto: Optional[str] = None
    empresa: Optional[str] = None
    contato_nome: Optional[str] = None
    contato_cargo: Optional[str] = None
    email: Optional[str] = None
    telefone: Optional[str] = None
    valor: Optional[float] = 0.0
    etapa: Optional[str] = None
    temperatura: Optional[str] = None
    integrador_nome: Optional[str] = None
    consumo_mensal: Optional[int] = None
    subsidio_haco: Optional[bool] = False
    timeline: Optional[Any] = None

class OportunidadeCreate(OportunidadeBase):
    pass

class OportunidadeResponse(OportunidadeBase):
    id: int
    data_criacao: datetime
    class Config:
        orm_mode = True

# --- Cliente ---
class ClienteBase(BaseModel):
    nome: str
    erp_code: Optional[str] = None
    cidade: Optional[str] = None
    estado: Optional[str] = None

class ClienteCreate(ClienteBase):
    pass

class ClienteResponse(ClienteBase):
    id: int
    class Config:
        orm_mode = True

# --- Faturamento ---
class FaturamentoBase(BaseModel):
    valor: Optional[float] = None
    data: Any = None
    pedido_haco: Optional[str] = None
    status: Optional[str] = "pendente"
    cliente_id: Optional[int] = None

class FaturamentoCreate(FaturamentoBase):
    pass

class FaturamentoResponse(FaturamentoBase):
    id: int
    class Config:
        orm_mode = True
