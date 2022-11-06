from pydantic import BaseModel


class UserRegister(BaseModel):
    name: str
    password: str
    repeated_password: str
    email: str
