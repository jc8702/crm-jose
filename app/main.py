from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="HACO RFID CRM")

# Serve arquivos estáticos (incluindo o HTML legado).
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")

templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))


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