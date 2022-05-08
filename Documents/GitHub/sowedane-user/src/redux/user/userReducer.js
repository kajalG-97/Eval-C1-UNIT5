import { USER_DETAIL, USER_LODING, USER_ERROR } from './userAction'

const initialState = {

    users: [],
    loding: false,
    error: false,

}

export const UserReducer = (store = initialState, { type, payload }) => {

    switch (type) {
        case USER_DETAIL: return { ...store, users: payload, loding: false, error: false }

        case USER_LODING: return { ...store, loding: true }

        case USER_ERROR: return { ...store, loding: false, error: true }

        default: return store;
    }
}