import axios from "axios";

export const ADD_COUNTRY = "ADD_COUNTRY";

export const Country_LOADING = "Country_LODING";

export const Country_DATA = "Country_DATA";

export const addCountry = (payload) => ({ type: "ADD_COUNTRY", payload });

export const countryLoding = () => ({ type: "Country_LODING" });

export const addCountryData = (data) => (dispatch) => {
    dispatch(countryLoding());

    axios.post("http://localhost:8080/countries", data).then(({ data }) => console.log(data))
        .catch((err) => console.log(err.massage));
}