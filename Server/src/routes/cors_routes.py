from fastapi import APIRouter, Query, HTTPException
from schema.cors_schema import CORStestSchema
from controllers.cors_controller import CORSInspectorController


# Instanciamos router
router = APIRouter()

@router.get("/url", response_model=CORStestSchema)
def cors_route(url: str = Query(..., description="URL a testear")):
    result = CORSInspectorController().start_test(url)
    
    if result.status == 500:
        raise HTTPException(status_code=500, detail=result.message)
    
    return result

@router.get("/")
def root():
    return {"message": "This is root"}