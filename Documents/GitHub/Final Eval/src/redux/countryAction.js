import axios from "axios";

export const ADD_COUNTRY = "ADD_COUNTRY";

export const Country_LOADING = "Country_LODING";

export const COUNTRY_DATA = "COUNTRY_DATA";

export const getCountryData = (payload) => ({ type: "COUNTRY_DATA", payload });

export const addCountry = (payload) => ({ type: "ADD_COUNTRY", payload });

export const countryLoding = () => ({ type: "Country_LODING" });

export const addCountryData = (data) => (dispatch) => {
    dispatch(countryLoding());

    axios.post("http://localhost:8080/countries", data).then(({ data }) => console.log(data))
        .catch((err) => console.log(err.massage));
}

export const getCountryDataList = () => (dispatch) => {
    dispatch(countryLoding());
    axios.get("http://localhost:8080/countries").then(({ data }) => dispatch(getCountryData(data)))
        .catch((err) => console.log(err.massage));
}