import { ADD_CITY, CITY_LOADING } from "./CityAction"

const initialState = {
    loding: false,
    citylist: [],
}
export const cityReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CITY: return { ...store, citylist: payload }

        case CITY_LOADING: return { ...store, loding: false }



        default: return store
    }
}