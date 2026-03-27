import os
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Configuração de logging básico para o banco
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("app.database")

# 1. Tornar DATABASE_URL obrigatório (Removendo fallback SQLite)
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    logger.error("ERRO CRITICAL: DATABASE_URL não configurada nas variáveis de ambiente.")
    raise RuntimeError("DATABASE_URL não configurado. O CRM exige PostgreSQL para persistência segura.")

# 2. Ajustar compatibilidade com PostgreSQL (Render/Heroku/Neon usam postgres://)
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Logar informações da conexão (sem expor a senha)
try:
    from urllib.parse import urlparse
    parsed = urlparse(DATABASE_URL)
    logger.info(f"Conectando ao banco de dados: {parsed.scheme} em {parsed.hostname}")
except Exception:
    logger.info("Conectando ao banco de dados configurado via DATABASE_URL")

# 3. Melhorar configuração do engine para produção
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,  # Verifica se a conexão ainda é válida antes de usar
    pool_size=5,         # Quantidade de conexões mantidas no pool
    max_overflow=10      # Quantidade extra de conexões se o pool estiver cheio
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency para obter a sessao do DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
