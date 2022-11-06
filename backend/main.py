from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException
from starlette.requests import Request
from starlette.responses import JSONResponse

from apps.authorization.routers import router as authorization_router
from config import get_settings, Settings
from fastapi import FastAPI

app = FastAPI(
    title="Analyzer",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
)


@app.exception_handler(AuthJWTException)
def authjwt_exception_handler(request: Request, exc: AuthJWTException) -> None:
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message}
    )


def configure_db(settings: Settings) -> None:
    config = {
        "connections": {
            "default": f"postgresql://{settings.POSTGRES_USER}:{settings.POSTGRES_PASSWORD}@{settings.POS}:{port}/{database}",
        },
        "apps": {
            "models": {
                "models": ["models", "aerich.models"],
                "default_connection": "default",
            },
        },
    }


@app.on_event("startup")
async def startup() -> None:
    AuthJWT.load_config(get_settings)
    settings = Settings()

    app.dependency_overrides = {
        get_settings: lambda: settings,
    }




app.include_router(authorization_router, tags=["Authorization"], prefix="/api/authorization")
