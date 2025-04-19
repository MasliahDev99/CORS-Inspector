import httpx
from schema.cors_schema import CORStestSchema

class CORSinspector:
    def run(self, url: str, origin: str = "https://example.com") -> CORStestSchema:
        """
        Ejecuta una prueba CORS sobre una URL objetivo, simulando una petición desde un origen específico.

        Esta función envía una solicitud HTTP GET al servidor especificado en `url`, incluyendo un encabezado
        `Origin` con el valor proporcionado en `origin`. El objetivo es determinar si el servidor permite
        solicitudes cross-origin desde ese origen (es decir, si tiene CORS habilitado para ese dominio).

        Args:
            url (str): La URL del servidor que se quiere inspeccionar.
            origin (str, opcional): El valor del encabezado `Origin` que simula desde dónde se hace la petición.
                                    Por defecto es "https://example.com".

        Returns:
            CORStestSchema: Un objeto que incluye:
                - `url`: La URL inspeccionada.
                - `status`: Código de estado HTTP de la respuesta.
                - `cors`: Booleano que indica si CORS está habilitado para ese origen.
                - `message`: Texto con información adicional sobre los encabezados CORS encontrados o errores.
                - `cors_headers`: Diccionario con los encabezados CORS detectados (si los hay).

        Ejemplo:
            inspector = CORSinspector()
            result = inspector.run("https://mi-api.com", origin="http://localhost:3000")
        """
        cors_headers = {}
        cors_enabled = False

        try:
            # Intentar primero con OPTIONS (preflight)
            preflight = httpx.options(url, headers={
                "Origin": origin,
                "Access-Control-Request-Method": "GET"
            }, timeout=5.0)

            cors_headers.update({
                k.lower(): v for k, v in preflight.headers.items()
                if k.lower().startswith("access-control-")
            })
            cors_enabled = "access-control-allow-origin" in cors_headers

            # Luego intentar GET por si el servidor no responde al OPTIONS
            get_response = httpx.get(url, headers={"Origin": origin}, follow_redirects=True, timeout=5.0)

            cors_headers.update({
                k.lower(): v for k, v in get_response.headers.items()
                if k.lower().startswith("access-control-")
            })
            cors_enabled = cors_enabled or ("access-control-allow-origin" in cors_headers)

            return CORStestSchema(
                url=url,
                status=get_response.status_code,
                cors=cors_enabled,
                message="CORS headers encontrados" if cors_headers else "No se encontraron encabezados CORS",
                cors_headers=cors_headers or None
            )

        except httpx.RequestError as e:
            return CORStestSchema(
                url=url,
                status=500,
                cors=False,
                message=f"Error de conexión: {e}",
                cors_headers=None
            )