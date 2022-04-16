import { ADD_COUNTRY, Country_LOADING } from "./countryAction"

const initialState = {
    loding: false,
    countrylist: [],
}
export const countryReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COUNTRY: return { ...store, countrylist: payload }

        case Country_LOADING: return { ...store, loding: false }

        default: return store
    }
}