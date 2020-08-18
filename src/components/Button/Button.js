import React from "react";

import "./styles.scss";

const Button = ({ text, onClick, iconColor, className, active }) => (
    <div
        className={
            "button "
            + (className ? className : "")
            + (active ? " button--active" : "")
        }
        onClick={ onClick }
    >
        { iconColor && <span className="button__icon" style={{ backgroundColor: iconColor }} /> }
        { text }
    </div>
);

export default Button;