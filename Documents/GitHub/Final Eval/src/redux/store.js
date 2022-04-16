import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cityReducer } from "./CityReducer";
import { countryReducer } from "./countryReducer";

const rootReducer = combineReducers({
    city: cityReducer,
    country: countryReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
