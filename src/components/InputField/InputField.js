import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

const InputField = (
    {
        fieldName,
        label,
        value,
        onChange,
        onClick,
        placeholder = "Placeholder",
        type = "text",
        ...props
    }) => {
    return (
        <>
            { label && <label htmlFor={ fieldName } className="input-field-label" >{ label }</label> }
            <div className={ "input-field " + (props.modifier ? `input-field--${ props.modifier  }` : "") } >
                { props.icon && <FontAwesomeIcon onClick={ onClick } icon={ props.icon } className="input-field__icon" /> }
                <input
                    value={ value }
                    onChange={ onChange }
                    name={ fieldName }
                    id={ fieldName }
                    placeholder={ placeholder }
                    className={
                        "input-field__input " +
                        (props.className ? props.className : "")
                    }
                    type={ type }
                />
            </div>
        </>
    );
};

export default InputField;