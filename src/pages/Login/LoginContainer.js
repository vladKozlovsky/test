import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Login from "./Login";

import { login } from "../../store/actions/user.actions";
import { Routers } from "../../shared/constants";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputsData, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const inputsChangeHandler = ({ target }) => {
        setLoginForm(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = inputsData;

        const res = await dispatch(login({ email, password }));
        if(res) {
            history.push(Routers.PROJECTS);
        }
    };

    return <Login
        data={ inputsData }
        onChange={ inputsChangeHandler }
        onSubmit={ handleSubmit }
    />
};

export default LoginContainer;