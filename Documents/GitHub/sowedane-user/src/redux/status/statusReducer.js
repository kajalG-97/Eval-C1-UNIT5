import {USER_STATUS,ADMIN_STATUS} from "./statusAction";

const initialState = {
    admin: false,
    user : false
}

export const statusReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case USER_STATUS: return { ...store, admin: false, user: true }
        case ADMIN_STATUS:return { ...store, admin:true,user:false}

        default: return store;
    }
}