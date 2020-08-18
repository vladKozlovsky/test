import { combineReducers } from "redux";

import user from "./user.reducer";
import project from "./project.reducer";

const rootReducer = combineReducers({
    user,
    project
});

export default rootReducer;