import { ADD_COUNTRY, COUNTRY_DATA, Country_LOADING } from "./countryAction"

const initialState = {
    loding: false,
    countrylist: [],
    list:[]
}
export const countryReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COUNTRY: return { ...store, countrylist: payload }

        case Country_LOADING: return { ...store, loding: false }

        case COUNTRY_DATA : return { ...store, list:payload,loading:false}

        default: return store
    }
}