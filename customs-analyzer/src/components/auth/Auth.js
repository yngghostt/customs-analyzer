import './Auth.css'
import * as Unicons from "@iconscout/react-unicons";
import {useState} from 'react';


const Auth = () => {


    const [isPwShowing, setIsActive] = useState(false);
    const [isLogin, changeLoginOrRegistration] = useState(true);
    const showHideIcon = () => {
        // 👇️ toggle
        setIsActive(current => !current);

        // 👇️ or set to true
        // setIsActive(true);
    };
    const changeLoginRegistration = () => {
        // 👇️ toggle
        changeLoginOrRegistration(current => !current);

        // 👇️ or set to true
        // setIsActive(true);
    };


    return (
        <div className="AuthWrapper">
            <div className={`AuthContainer ${isLogin ? ' ' : 'active'}`}>
                <div className="forms">
                    <div className="form login">
                        <span className="title">Логин</span>
                        <form>
                            <div className="input-field">
                                <div className="icon">
                                    <Unicons.UilEnvelope/>
                                </div>
                                <input type="text" placeholder="Введите Ваш email" required/>
                            </div>
                            <div className="input-field">
                                <input
                                    type={isPwShowing ? 'password' : 'type'}
                                    className="password" placeholder="Введите Ваш пароль" required/>
                                <div className="icon">
                                    <Unicons.UilLock/>
                                </div>
                                <div className="showPw"
                                     style={{display: isPwShowing ? 'block' : 'none'}}
                                     onClick={showHideIcon}
                                >
                                    <Unicons.UilEyeSlash/>
                                </div>
                                <div className="hidePw"
                                     style={{display: isPwShowing ? 'none' : 'block'}}
                                     onClick={showHideIcon}
                                >
                                    <Unicons.UilEye/>
                                </div>
                            </div>
                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="logCheck"/>
                                    <label htmlFor="logCheck" className="text">Запомнить меня</label>
                                </div>

                                <a href="#" className="text">Забыли пароль?</a>
                            </div>

                            <div className="input-field button">
                                <input type="button" value="Войти"/>
                            </div>
                        </form>
                        <div className="login-signup">
                            <span className="text">Ещё не зарегистрированы?
                                <a
                                    onClick={changeLoginRegistration}
                                    href="#" className="text signup-link">Зарегистрироваться сейчас</a>
                            </span>
                        </div>
                    </div>
                    <div className="form signup">
                        <span className="title">Регистрация</span>

                        <form action="#">
                            <div className="input-field">
                                <input type="text" placeholder="Введите Ваше имя" required/>
                                <div className="icon">
                                    <Unicons.UilUser/>
                                </div>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Введите Ваш email" required/>
                                <div className="icon">
                                    <Unicons.UilEnvelope/>
                                </div>
                            </div>
                            <div className="input-field">
                                <input
                                    type={isPwShowing ? 'password' : 'type'}
                                       className="password" placeholder="Создайте пароль" required/>
                                <div className="icon">
                                    <Unicons.UilLock/>
                                </div>
                                <div className="showPw"
                                     style={{display: isPwShowing ? 'block' : 'none'}}
                                     onClick={showHideIcon}
                                >
                                    <Unicons.UilEyeSlash/>
                                </div>
                                <div className="hidePw"
                                     style={{display: isPwShowing ? 'none' : 'block'}}
                                     onClick={showHideIcon}
                                >
                                    <Unicons.UilEye/>
                                </div>
                            </div>
                            <div className="input-field">
                                <input
                                    type={isPwShowing ? 'password' : 'type'}
                                       className="password" placeholder="Подтвердите Ваш пароль" required/>
                                <div className="icon">
                                    <Unicons.UilLock/>
                                </div>
                                <div className="showPw"
                                     style={{display: isPwShowing ? 'block' : 'none'}}
                                     onClick={showHideIcon}
                                >
                                    <Unicons.UilEyeSlash/>
                                </div>
                                <div className="hidePw"
                                     style={{display: isPwShowing ? 'none' : 'block'}}
                                     onClick={showHideIcon}
                                >
                                    <Unicons.UilEye/>
                                </div>
                            </div>

                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="sigCheck"/>
                                    <label htmlFor="sigCheck" className="text">Запомнить меня</label>
                                </div>

                                <a href="#" className="text">Забыли пароль?</a>
                            </div>

                            <div className="input-field button">
                                <input type="button" value="Зарегистрироваться"/>
                            </div>
                        </form>

                        <div className="login-signup">
                    <span className="text">Уже зарегистрированы?
                        <a
                            onClick={changeLoginRegistration}
                            href="#" className="text login-link">Войти</a>
                    </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Auth;