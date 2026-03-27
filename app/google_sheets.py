import os
import logging
from google.oauth2 import service_account
from googleapiclient.discovery import build

logger = logging.getLogger("app.google_sheets")

def get_sheets_service():
    """ Obter o serviço da API do Google Sheets. Prioriza Conta de Serviço se existir. """
    creds_path = os.getenv("GOOGLE_SHEETS_CREDENTIALS_JSON_PATH")
    creds_json = os.getenv("GOOGLE_SHEETS_CREDENTIALS")
    
    creds = None
    try:
        if creds_json:
            import json
            creds_info = json.loads(creds_json)
            creds = service_account.Credentials.from_service_account_info(
                creds_info, scopes=['https://www.googleapis.com/auth/spreadsheets.readonly']
            )
        elif creds_path and os.path.exists(creds_path):
            creds = service_account.Credentials.from_service_account_file(
                creds_path, scopes=['https://www.googleapis.com/auth/spreadsheets.readonly']
            )
    except Exception as e:
        logger.error(f"Erro ao carregar credenciais do Google: {str(e)}")

    if not creds:
        # Se não houver credenciais, tenta acesso público via API Key se configurada
        api_key = os.getenv("GOOGLE_API_KEY")
        if api_key:
            return build('sheets', 'v4', developerKey=api_key)
        else:
            logger.warning("Nenhuma credencial do Google configurada. Somente acesso limitado disponível.")
            return None

    return build('sheets', 'v4', credentials=creds)

def fetch_sheet_data(spreadsheet_id, range_name):
    """ Busca valores de uma planilha específica. """
    service = get_sheets_service()
    if not service:
        raise RuntimeError("Serviço do Google Sheets não disponível (faltam credenciais).")
    
    try:
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=spreadsheet_id, range=range_name).execute()
        return result.get('values', [])
    except Exception as e:
        logger.error(f"Erro ao buscar planilha {spreadsheet_id}: {str(e)}")
        raise e

def get_sheet_headers(spreadsheet_id, sheet_name="Página1"):
    """ Retorna apenas a primeira linha (cabeçalhos) para mapeamento. Fallback para a primeira aba se falhar. """
    service = get_sheets_service()
    if not service:
        raise RuntimeError("Serviço do Google Sheets não disponível (faltam credenciais).")

    try:
        # Tenta com o nome fornecido
        range_name = f"'{sheet_name}'!A1:Z1"
        values = fetch_sheet_data(spreadsheet_id, range_name)
        if values and len(values) > 0:
            return values[0]
    except Exception as e:
        logger.warning(f"Erro ao buscar aba '{sheet_name}'. Tentando a primeira aba por padrão. Erro: {str(e)}")
        
    # Se falhar ou não encontrar, busca o nome da primeira aba do Spreadsheet
    try:
        metadata = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
        first_sheet_name = metadata['sheets'][0]['properties']['title']
        range_name = f"'{first_sheet_name}'!A1:Z1"
        values = fetch_sheet_data(spreadsheet_id, range_name)
        if values and len(values) > 0:
            return values[0]
    except Exception as e:
        logger.error(f"Erro final ao buscar cabeçalhos do Google Sheets {spreadsheet_id}: {str(e)}")
        raise e

    return []
