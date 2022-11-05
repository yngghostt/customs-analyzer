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
        <div>
            <div className={`container ${isLogin ? ' ' : 'active'}`}>
                <div className="forms">
                    <div className="form login">
                        <span className="title">Логин</span>
                        <form>
                            <div className="input-field">
                                <div className="icon">
                                    <Unicons.UilEnvelope/>
                                </div>
                                <input type="text" placeholder="Enter your email" required/>
                            </div>
                            <div className="input-field">
                                <input
                                    type={isPwShowing ? 'password' : 'type'}
                                    className="password" placeholder="Enter your password" required/>
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
                                    <label htmlFor="logCheck" className="text">Remember me</label>
                                </div>

                                <a href="#" className="text">Forgot password?</a>
                            </div>

                            <div className="input-field button">
                                <input type="button" value="Login Now"/>
                            </div>
                        </form>
                        <div className="login-signup">
                            <span className="text">Not a member?
                                <a
                                    onClick={changeLoginRegistration}
                                    href="#" className="text signup-link">Signup now</a>
                            </span>
                        </div>
                    </div>
                    <div className="form signup">
                        <span className="title">Registration</span>

                        <form action="#">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your name" required/>
                                <div className="icon">
                                    <Unicons.UilUser/>
                                </div>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Enter your email" required/>
                                <div className="icon">
                                    <Unicons.UilEnvelope/>
                                </div>
                            </div>
                            <div className="input-field">
                                <input
                                    type={isPwShowing ? 'password' : 'type'}
                                       className="password" placeholder="Create a password" required/>
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
                                       className="password" placeholder="Confirm a password" required/>
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
                                    <label htmlFor="sigCheck" className="text">Remember me</label>
                                </div>

                                <a href="#" className="text">Forgot password?</a>
                            </div>

                            <div className="input-field button">
                                <input type="button" value="Login Now"/>
                            </div>
                        </form>

                        <div className="login-signup">
                    <span className="text">Not a member?
                        <a
                            onClick={changeLoginRegistration}
                            href="#" className="text login-link">Signup now</a>
                    </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Auth;