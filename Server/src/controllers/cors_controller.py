from schema.cors_schema import CORStestSchema
from libs.cors_inspector import CORSinspector

class CORSInspectorController:
    """
        Este controlador se encarga de manejar las solicitudes relacionadas con el inspector de CORS.
        Utiliza la clase CORSinspector para realizar el test de CORS y devuelve los resultados en el esquema CORStestSchema.
        Clase CORSInspectorController:
            - startTest(url: str) -> CORStestSchema: Realiza el test de CORS para una URL dada y devuelve los resultados en el esquema CORStestSchema.
    """
    def __init__(self):
        self.cors_inspector = CORSinspector()

    def start_test(self, url: str) -> CORStestSchema:
        return self.cors_inspector.run(url)
