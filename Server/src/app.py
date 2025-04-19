from sys import prefix
from fastapi import FastAPI
from routes.cors_routes import router
from fastapi.middleware.cors import CORSMiddleware

# instanciamos app como instancia de FastAPI
app = FastAPI()

# configuramos CORS para cualquier frontend local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["Content-Type","Authorization"],
)

# incluimos router en app y agregamos prefijo /api
app.include_router(router, prefix="/api")
