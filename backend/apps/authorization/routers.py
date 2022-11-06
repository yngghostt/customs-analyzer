from fastapi import APIRouter, Depends

from apps.authorization.schemas import UserRegister
from apps.authorization.validators import UserValidator
from config import Settings, get_settings
from exceptions.user import UserRegisterError

router = APIRouter()


@router.post('/register')
def register(user_data: UserRegister, settings: Settings = Depends(get_settings)):
    user_validator = UserValidator(user_data, settings)
    user_validator.validate()
    if errors := user_validator.get_errors():
        raise UserRegisterError(errors)

    return user_data
