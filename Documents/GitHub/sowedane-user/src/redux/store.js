import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { registerReducer } from "./register/registerReducer";
import { AdminReducer } from "./admin/adminReducer";
import { UserReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    register: registerReducer,
    admin: AdminReducer,
    user: UserReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));