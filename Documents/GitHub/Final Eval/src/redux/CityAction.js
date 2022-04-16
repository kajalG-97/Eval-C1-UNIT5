import axios from "axios";

export const ADD_CITY = "ADD_CITY";

export const CITY_LOADING = "CITY_LODING";

export const CITY_DATA = "CITY_DATA";



export const addCity = (payload) => ({ type: "ADD_CITY", payload });

export const cityLoding = () => ({ type: "CITY_LODING" });

export const addCityData = (formData) => (dispatch) => {
    dispatch(cityLoding());

    axios.post("http://localhost:8080/cities", formData).then(({ data }) => console.log(data))
        .catch((err) => console.log(err.massage));
}




