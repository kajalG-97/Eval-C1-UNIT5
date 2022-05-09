import axios from "axios";

export const USER_LODING = "USER_LODING";

export const USER_ERROR = "USER_ERROR";

export const USER_DETAIL = "USER_DETAIL";

export const UPDATE_USER = "UPDATE_USER";

export const userLoding = () => ({ type: USER_LODING });

export const userError = () => ({ type: USER_ERROR });

export const userDetails = (payload) => ({ type: USER_DETAIL, payload });

export const getUserDetails = (page, sort, filter) => (dispatch) => {

    dispatch(userLoding());

    axios.get(`https://user-information-project.herokuapp.com/admin?page=${page}&sortBy=age&OrderBy=${sort}&city=${filter}`).then(({ data }) => dispatch(userDetails(data)))
        .catch((err) => dispatch(userError()));

} 

export const getOneUserDetail =(id)=> (dispatch) => {

    dispatch(userLoding());

    axios.get(`https://user-information-project.herokuapp.com/users/${id}`).then(({ data }) => dispatch(userDetails(data)))
        .catch((err) => dispatch(userError()));

} 


export const updateUserData = (data, id, toast, navigate) => (dispatch) => {

    dispatch(userLoding());

    axios.patch(`https://user-information-project.herokuapp.com/users/${id}`, data).then(({ data }) => {
        dispatch(userDetails(data))
        toast.success("User Details Updated!", {
            position: "top-center",
        });
        setTimeout(() => { navigate("/mainHome"); }, 1000)
    }).catch((err) => {
        dispatch(userError())
        toast.error("OOPS, Try again!", {
            position: "top-center",
        });
    });
}



