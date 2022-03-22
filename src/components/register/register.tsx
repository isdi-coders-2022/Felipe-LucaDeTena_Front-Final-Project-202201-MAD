import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { signUp } from '../../redux/login-register/action-creators';
import './register.scss';

function SignUp() {
    const [register, setRegister] = useState({
        name: '',
        surName: '',
        email: '',
        password: '',
    });

    const dispatch = useAppDispatch();

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        dispatch(signUp(register));
    };

    const handleChange = (ev: any, control: any) => {
        setRegister({ ...register, [control]: ev.target.value });
    };

    return (
        <div className="container">
            <div className="container__register">
                <div className="header">
                    <div className="header__logo">
                        <svg
                            className="header__logo__svg"
                            width="120"
                            height="148"
                            viewBox="0 0 120 148"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M54.4615 129.99C48.0963 129.99 11.5303 141.392 7.02944 139.345C2.52856 137.298 0 134.522 0 131.627V87.9661V-13H24V131.627L36.9231 123.441L48 93.4237H72V131.627L92.3077 137.085L82.1538 93.4237L120 87.9661V131.627C120 134.522 117.471 137.298 112.971 139.345C108.47 141.392 102.365 148 96 148L54.4615 129.99Z"
                                fill="#00000053"
                            />
                        </svg>
                        <span className="header__logo__letters">ishy</span>
                    </div>

                    <h1 className="header__h1">Registration</h1>
                    <div className="container__p">
                        <p className="header__p">
                            We need you to help us with some basic information.
                        </p>
                        <p className="header__p">
                            Fill in the boxes for your account creation.
                        </p>
                        <p className="header__p">
                            Here are our terms and conditions. Please read them
                            carefully.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="container__form">
                        <input
                            type="text"
                            name="user-name"
                            id="user-name"
                            placeholder="Name"
                            className="container__form__input"
                            value={register.name}
                            required
                            onChange={(ev) => handleChange(ev, 'name')}
                            data-testid="dos"
                        />
                        <input
                            type="text"
                            name="user-surName"
                            id="user-surName"
                            placeholder="Lastname"
                            className="container__form__input"
                            value={register.surName}
                            required
                            onChange={(ev) => handleChange(ev, 'surName')}
                        />
                        <input
                            type="text"
                            name="user-email"
                            id="user-email"
                            placeholder="Email"
                            className="container__form__input"
                            value={register.email}
                            required
                            onChange={(ev) => handleChange(ev, 'email')}
                        />
                        <input
                            type="password"
                            name="user-password"
                            id="user-password"
                            placeholder="Password"
                            className="container__form__input"
                            value={register.password}
                            required
                            onChange={(ev) => handleChange(ev, 'password')}
                        />
                        <button
                            type="submit"
                            className="container__form__button"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <div className="container__img">
                <img className="sideimage" src="/register-pic.png" alt="none" />
            </div>
        </div>
    );
}

export default SignUp;
