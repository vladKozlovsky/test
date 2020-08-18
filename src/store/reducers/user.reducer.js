import * as userTypes from "../types/user.types";

const initialState = {
    email: "",
    password: "",
    isAuth: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.LOGIN_USER:
        case userTypes.REGISTER_USER:
            return {
                ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }
};

export default reducer;