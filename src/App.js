import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Login, Register, Project } from "./pages";
import { Auth, DoNotAuth } from "./shared/hoc";
import { NavBar } from "./components";

import { Routers } from "./shared/constants";
import "./assets/styles/app.scss";

const App = () => (
    <>
        <NavBar />
        <Switch>
            <Route exact path={ Routers.PROJECTS } component={ DoNotAuth(Project) } />

            <Route exact path={ Routers.LOGIN } component={ Auth(Login) } />
            <Route exact path={ Routers.REGISTER } component={ Auth(Register) } />
        </Switch>
    </>
)

export default App;
