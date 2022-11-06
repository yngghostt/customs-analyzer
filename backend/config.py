from functools import lru_cache
from typing import TypeVar

from pydantic import BaseSettings, Field

T = TypeVar("T", str, int)


def get_env(name: str, *, required: bool = False, default: T = None) -> T:
    if required and not default:
        default = ...  # type: ignore
    return Field(default, env=name)


class DatabaseSettings(BaseSettings):
    POSTGRES_HOST: str = get_env("POSTGRES_HOST", default='postgres')
    POSTGRES_DB: str = get_env("POSTGRES_DB", required=True)
    POSTGRES_USER: str = get_env("POSTGRES_USER", required=True)
    POSTGRES_PASSWORD: str = get_env("POSTGRES_PASSWORD", required=True)
    POSTGRES_PORT: int = get_env("POSTGRES_PORT", default=5432)


class TortoiseORMSettings(BaseSettings):
    MODELS: list[str] = ["aerich.models", "apps.authorization.models"]


class AuthJWTSettings(BaseSettings):
    authjwt_secret_key: str = get_env('AUTH_SECRET_KEY', required=True)


class ValidationSettings(BaseSettings):
    USER_NAME_MAX_LENGTH: int = 64
    USER_EMAIL_MAX_LENGTH: int = 64
    USER_PASSWORD_MAX_LENGTH: int = 64
    USER_PASSWORD_MIN_LENGTH: int = 9
    EMAIL_REGEX: str = r"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"


class Settings(DatabaseSettings, AuthJWTSettings, ValidationSettings):
    pass


@lru_cache
def get_settings() -> Settings:
    return Settings()
