import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { registerReducer } from "./register/registerReducer";
import { AdminReducer } from "./admin/adminReducer";
import { UserReducer } from "./user/userReducer";
import { statusReducer } from "./status/statusReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    register: registerReducer,
    admin: AdminReducer,
    user: UserReducer,
    status:statusReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));