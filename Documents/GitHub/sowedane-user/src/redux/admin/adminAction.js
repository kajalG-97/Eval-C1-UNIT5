import axios from "axios";
import { adminStatus } from "../status/statusAction";

export const aLOGIN_SUCCESS = 'aLOGIN_SUCCESS';

export const aLOGIN_ERROR = 'aLOGIN_ERROR';

export const aLOGIN_LODING = 'aLOGIN_LODING';

export const LOGOUT = 'LOGOUT';

export const aloginLoding = () => ({ type: aLOGIN_LODING });

export const aloginError = () => ({ type: aLOGIN_ERROR });

export const aloginSuccess = (payload) => ({ type: aLOGIN_SUCCESS, payload });

export const logoutUser = () => ({ type: LOGOUT })

export const adminloginSuccessData = (data, toast, navigate) => (dispatch) => {
    dispatch(aloginLoding());
    
   

        axios.post("https://user-information-project.herokuapp.com/alogin", data).then(({ data }) => {
            dispatch(aloginSuccess(data));

            dispatch(adminStatus());

            console.log('data', data);

            toast.success("Logged in Successfully", {
                position: "top-center",
            });
            setTimeout(() => { navigate("/mainHome"); }, 3000)
        }).catch((err) => {
            console.log('err', err.massage);
            dispatch(aloginError())
            toast.error("Please check your email or password", {
                position: "top-center",
            });
        });
    }


