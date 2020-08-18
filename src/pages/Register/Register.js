import React from 'react';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { InputField } from "../../components";

import "./styles.scss";

const Register = (
    {
        onSubmit,
        onChange,
        onPasswordChange,
        onClickByIcon,
        onToggle,
        fieldsData,
        password,
        reenterPassword,
        verifyPassword,
        isChecked,
        blocked
    }) => (
    <div className="container register-page" >
        <form onSubmit={ onSubmit } className="register-page__form" >
            <InputField
                value={ fieldsData.firstName }
                onChange={ onChange }
                fieldName="firstName"
                label="First name"
                placeholder="Enter first name"
            />
            <InputField
                value={ fieldsData.lastName }
                onChange={ onChange }
                fieldName="lastName"
                label="last name"
                placeholder="Enter last name"
            />
            <InputField
                value={ fieldsData.email }
                onChange={ onChange }
                fieldName="email"
                label="Email"
                type="email"
                placeholder="Enter email"
            />
            <InputField
                value={ fieldsData.reenterEmail }
                onChange={ onChange }
                fieldName="reenterEmail"
                label="Confirm email"
                type="email"
                placeholder="Confirm email"
            />
            <InputField
                value={ fieldsData.password }
                onChange={ onPasswordChange }
                fieldName="password"
                icon={ password.watched ? faEye : faEyeSlash }
                onClick={ onClickByIcon.bind(null, "password") }
                label="Password"
                placeholder="Enter password"
                modifier="right"
                type={ password.watched ? "text" : "password" }
            />
            <InputField
                value={ fieldsData.reenterPassword }
                onChange={ onChange }
                fieldName="reenterPassword"
                icon={ reenterPassword.watched ? faEye : faEyeSlash }
                onClick={ onClickByIcon.bind(null, "reenterPassword") }
                label="Confirm password"
                placeholder="Confirm password"
                modifier="right"
                type={ reenterPassword.watched ? "text" : "password" }
            />
            <div className="register-page__date-wrapper" >
                <label htmlFor="dateOfBirth" >Date of birt</label>
                <input
                    value={ fieldsData.dateOfBirth }
                    onChange={ onChange }
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="register-page__date input-field__input"
                />
            </div>
            <div className="register-page__checkbox-wrapper" >
                <label htmlFor="checkbox" >Accepted terms and policies</label>
                <input
                    value={ isChecked }
                    onChange={ onToggle }
                    type="checkbox"
                    id="checkbox"
                    className="register-page__checkbox"
                />
            </div>
            <div className="requirement-container" >
                <div className="requirement-container__item">
                    <p className={
                        "requirement-container__text " +
                        (verifyPassword.lowerCaseLetter && "requirement-container__text--active")
                    } >
                        One lowercase letter
                    </p>
                </div>
                <div className="requirement-container__item">
                    <p className={
                        "requirement-container__text " +
                        (verifyPassword.upperCaseLetter && "requirement-container__text--active")
                    } >
                        One uppercase letter
                    </p>
                </div>
                <div className="requirement-container__item">
                    <p className={
                        "requirement-container__text " +
                        (verifyPassword.numberCharacter && "requirement-container__text--active")
                    } >
                        One number
                    </p>
                </div>
                <div className="requirement-container__item">
                    <p className={
                        "requirement-container__text " +
                        (verifyPassword.specialCharacter && "requirement-container__text--active")
                    } >
                        One special character
                    </p>
                </div>
                <div className="requirement-container__item">
                    <p className={
                        "requirement-container__text " +
                        (verifyPassword.eightCharacters && "requirement-container__text--active")
                    } >
                        8 characters minimum
                    </p>
                </div>
            </div>
            <div className="register-page__button-wrapper">
                <button
                    disabled={ blocked }
                    className="btn register-page__btn"
                >
                    Register
                </button>
            </div>
        </form>
    </div>
);

export default Register;