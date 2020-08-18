import * as userTypes from "../types/user.types";
import { UserAPI } from "../../apiServices";

export const userActions = {
    registerAC: payload => ({ type: userTypes.REGISTER_USER, payload }),
    loginAC: payload => ({ type: userTypes.LOGIN_USER, payload })
};

export const register = newData => async dispatch => {
   try {
       const { data: { token } } = await UserAPI.register(newData);
       localStorage.setItem("authData", JSON.stringify({ isAuth: true, token }));

       dispatch(userActions.registerAC({ email: newData.email, password: newData.password }));

       return true;
   } catch (err) {
       console.log(err)
   }
};

export const login = newData => async dispatch => {
    try {
        const { data: { token } } = await UserAPI.login(newData);
        localStorage.setItem("authData", JSON.stringify({ isAuth: true, token }));

        dispatch(userActions.loginAC({ email: newData.email, password: newData.password }));

        return true;
    } catch (err) {
        console.log(err)
    }
};