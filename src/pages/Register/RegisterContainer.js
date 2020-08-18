import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Register from "./Register";

import { register } from "../../store/actions/user.actions";
import { Routers } from "../../shared/constants";
import "./styles.scss";

const initialInputsData = {
    firstName: "",
    lastName: "",
    email: "",
    reenterEmail: "",
    password: "",
    reenterPassword: "",
    dateOfBirth: 0,
};

const initialVisibilityPasswordFields= {
    password: {
        watched: false
    },
    reenterPassword: {
        watched: false
    }
};

const RegisterContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputsData, setInputsData] = useState(initialInputsData);
    const [isChecked, setCheckboxStatus] = useState(false);

    const [visibilityPasswordFields, setVisibilityPasswordFields] = useState(initialVisibilityPasswordFields);

    const [verifyPassword, setVerifyPassword] = useState({
        lowerCaseLetter: false,
        upperCaseLetter: false,
        numberCharacter: false,
        specialCharacter: false,
        eightCharacters: false,
    });

    const [blocked, setBlockStatus] = useState(true);

    const inputsChangeHandler = ({ target }) => {
        setInputsData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const onPasswordChange = useCallback(({ target }) => {
            setInputsData(prevState => ({ ...prevState, password: target.value }));

            if (/[a-z]/.test(target.value)) {
                setVerifyPassword(prevState => ({ ...prevState, lowerCaseLetter: true }));
            } else {
                setVerifyPassword(prevState => ({ ...prevState, lowerCaseLetter: false }));
            };

            if (/[A-Z]/.test(target.value)) {
                setVerifyPassword(prevState => ({ ...prevState, upperCaseLetter: true }));
            } else {
                setVerifyPassword(prevState => ({ ...prevState, upperCaseLetter: false }));
            };

            if (/[0-9]/.test(target.value)) {
                setVerifyPassword(prevState => ({ ...prevState, numberCharacter: true }));
            } else {
                setVerifyPassword(prevState => ({ ...prevState, numberCharacter: false }));
            };

            if (/[!@#$%^&*]/.test(target.value)) {
                setVerifyPassword(prevState => ({ ...prevState, specialCharacter: true }));
            } else {
                setVerifyPassword(prevState => ({ ...prevState, specialCharacter: false }));
            };

            if (target.value.length >= 8) {
                setVerifyPassword(prevState => ({ ...prevState, eightCharacters: true }));
            } else {
                setVerifyPassword(prevState => ({ ...prevState, eightCharacters: false }));
            };

        },[]);

    useEffect(() => {
        if(
            isChecked &&
            inputsData.firstName &&
            inputsData.lastName &&
            inputsData.email &&
            inputsData.password &&
            inputsData.dateOfBirth &&
            (inputsData.password === inputsData.reenterPassword) &&
            (inputsData.email === inputsData.reenterEmail) &&

            verifyPassword.lowerCaseLetter &&
            verifyPassword.upperCaseLetter &&
            verifyPassword.numberCharacter &&
            verifyPassword.specialCharacter &&
            verifyPassword.eightCharacters
        ) {
            setBlockStatus(false)
        } else if(!blocked) {
            setBlockStatus(true)
        };

    }, [blocked, inputsData, isChecked, verifyPassword]);

    const handleClickByIconHandler = iconName => {
        setVisibilityPasswordFields(prevState => ({
            ...prevState,
            [iconName]: {
                watched: !prevState[iconName].watched
            }
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const res = await dispatch(register({
            email: inputsData.email,
            password: inputsData.password,
            repeatPassword: inputsData.reenterPassword
        }));

        if(res) {
            history.push(Routers.PROJECTS);
        }
    };

    return <Register
        onChange={ inputsChangeHandler }
        onPasswordChange={ onPasswordChange }
        onSubmit={ handleSubmit }
        onClickByIcon={ handleClickByIconHandler }
        onToggle={ () => setCheckboxStatus(!isChecked) }
        fieldsData={ inputsData }
        password={ visibilityPasswordFields.password }
        reenterPassword={ visibilityPasswordFields.reenterPassword }
        verifyPassword={ verifyPassword }
        isChecked={ isChecked }
        blocked={ blocked }
    />
};

export default RegisterContainer;