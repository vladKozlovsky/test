import React from 'react';
import { NavLink } from "react-router-dom";

import { StorageKeys, Routers } from "../../shared/constants";
import "./styles.scss";

const NavBar = () => {
    const authData = localStorage.getItem(StorageKeys.AUTH_DATA);
    const isAuth = JSON.parse(authData) && JSON.parse(authData).isAuth;

    return (
        <header className="navbar" >
            <ul className="navbar__links-container" >
                { !isAuth
                    ? (
                        <>
                            <li className="navbar__link-wrapper" >
                                <NavLink
                                    exact
                                    to={ Routers.LOGIN }
                                    className="navbar__link"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="navbar__link-wrapper" >
                                <NavLink
                                    exact
                                    to={ Routers.REGISTER }
                                    className="navbar__link"
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>)
                    : (
                        <li className="navbar__link-wrapper" >
                            <NavLink
                                exact
                                to={ Routers.PROJECTS }
                                className="navbar__link"
                            >
                                Projects
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </header>
    );
};

export default NavBar;