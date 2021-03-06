import React, { useEffect } from "react";
import { Routers, StorageKeys } from "../constants";

const WithAuthRedirect = Component => {
    const RedirectComponent = props => {
       useEffect(() => {
           let authData = localStorage.getItem(StorageKeys.AUTH_DATA);

           if(authData && (JSON.parse(authData).isAuth)) {
               props.history.push(Routers.PROJECTS);
           }

       }, [props.history]);

        return <Component { ...props } />;
    };

    RedirectComponent.displayName = "WithAuthRedirect";
    return RedirectComponent;
};

export default WithAuthRedirect;