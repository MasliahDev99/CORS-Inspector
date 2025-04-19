from pydantic import BaseModel
from typing import Optional,Dict

class CORStestSchema(BaseModel):
    """
       Este archivo define un schema de respuesta que usarás para tipar y estructurar el resultado del test de CORS.
       
       Clase CORStestSchema:
           - url (str): La URL que se está probando.
           - status (int): El código de estado HTTP de la respuesta.
           - cors (bool): Indica si el servidor responde con CORS habilitado (True) o no (False).
           - message (str): Un mensaje descriptivo que indica el resultado del test de CORS.
           - cors_headers (Dict[str, str], opcional): Un diccionario que contiene los encabezados CORS devueltos por el servidor, si los hay.
    """
    url: str
    status: int
    cors: bool
    message: str
    cors_headers: Optional[Dict[str, str]] = None  