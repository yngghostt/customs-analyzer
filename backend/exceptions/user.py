from fastapi import HTTPException
from starlette.status import HTTP_400_BAD_REQUEST


class UserRegisterError(HTTPException):
    def __init__(self, detail: list[dict], status_code: int = HTTP_400_BAD_REQUEST) -> None:
        super().__init__(status_code, detail)
