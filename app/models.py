from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, Date, DateTime, JSON
from sqlalchemy.orm import relationship
from .database import Base
import datetime

class Cliente(Base):
    __tablename__ = "clientes"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, unique=True, index=True)
    erp_code = Column(String, nullable=True)
    cidade = Column(String)
    estado = Column(String)
    faturamentos = relationship("Faturamento", back_populates="cliente")

class Oportunidade(Base):
    __tablename__ = "oportunidades"
    id = Column(Integer, primary_key=True, index=True)
    nome_projeto = Column(String)
    empresa = Column(String)
    contato_nome = Column(String)
    contato_cargo = Column(String)
    email = Column(String)
    telefone = Column(String)
    valor = Column(Float, default=0.0)
    etapa = Column(String)  # novo, negociando, avaliando, assinatura, ganho
    temperatura = Column(String) # frio, morno, quente
    
    # Campos específicos RFID (Refletindo o Integrador do seu HTML)
    integrador_nome = Column(String)
    consumo_mensal = Column(Integer)
    subsidio_haco = Column(Boolean, default=False)
    timeline = Column(JSON) # Armazena o histórico em formato JSON para flexibilidade
    data_criacao = Column(DateTime, default=datetime.datetime.utcnow)

class Faturamento(Base):
    __tablename__ = "faturamentos"
    id = Column(Integer, primary_key=True, index=True)
    valor = Column(Float)
    data = Column(Date)
    pedido_haco = Column(String)
    status = Column(String, default="pendente")
    cliente_id = Column(Integer, ForeignKey("clientes.id"))
    
    cliente = relationship("Cliente", back_populates="faturamentos")

class CRMState(Base):
    """ Tabela para armazenar o estado completo do CRM (Sync) """
    __tablename__ = "crm_state"
    id = Column(Integer, primary_key=True, index=True)
    data = Column(JSON)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)