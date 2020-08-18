import React from "react";

import { InputField } from "../../components";

import "./styles.scss";

const Login = ({ data, onChange, onSubmit }) => (
    <div className="login-page container" >
        <form className="login-page__form" onSubmit={ onSubmit } >
            <InputField
                value={ data.email }
                onChange={ onChange }
                fieldName="email"
                label="Email"
                placeholder="Enter email"
            />
            <InputField
                value={ data.password }
                onChange={ onChange }
                fieldName="password"
                label="Password"
                placeholder="Enter password"
            />
            <button
                disabled={ !data.password || !data.email }
                className="btn login-page__btn"
            >
                Login
            </button>
        </form>
    </div>
);

export default Login;