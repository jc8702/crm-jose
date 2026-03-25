# HACO RFID CRM (Projeto)

## Estrutura atual

- `app/static/haco_funcional.html`: seu HTML original (mantido como versão legado).
- `app/templates/index.html`: página “entrada” do projeto (aponta para o legado).
- `app/main.py`: servidor FastAPI minimalista para servir o site.

## Rodar

1. Criar e ativar um ambiente Python (venv).
2. Instalar dependências:
   - `pip install -r requirements.txt`
3. Iniciar o servidor:
   - `uvicorn app.main:app --reload`
4. Abrir:
   - `http://127.0.0.1:8000/`
   - botão para `http://127.0.0.1:8000/crm-legado`

## Próximos passos (melhores práticas)

Para transformar o “legado” em um código sustentável, o recomendado é:

- Extrair os `<style>` para `app/static/css/` e os `<script>` para `app/static/js/`.
- Remover `onclick="..."` e trocar por `addEventListener` (evita acoplamento global).
- Organizar o código JS em módulos (ex.: `src/` + bundler) e escrever testes para funções críticas.

