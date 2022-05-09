import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";

import {
    Checkbox,
    Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeNav } from "./HomeNav";
import { loginSuccessData } from "../redux/auth/authAction";



export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loding, error } = useSelector((store) => store.auth);

    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const getformData = (e) => {
        let { id, value } = e.target;
        setData({ ...data, [id]: value });
    };

    const loginHandler = () => {
        // validation for email and password
        // const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // const passwordPattern =
        //     /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;
        // if (!emailpattern.test(data.email)) {
        //     toast.warn("There must be a valid email address", {
        //         position: "top-center",
        //     });
        // } else if (!passwordPattern.test(data.password)) {
        //     toast.warn(
        //         "Password must be in Alphanumeric format and min length of 8",
        //         {
        //             position: "top-center",
        //         }
        //     );
        // } else {
            // e.preventDefault();
            dispatch(loginSuccessData(data, toast, navigate))
        // }
    };

    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
        <>

            <Box style={{ backgroundColor: "#ebe7ff", height: "660px", marginTop: 0 }}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                        m: 1,
                        width: 450,
                        height: 450,
                    },
                    justifyContent: "center",
                    marginTop: "20px",
                    paddingTop: "65px"
                }}
            >
                <Paper
                    elevation={3}
                    sx={{ padding: "30px", display: "flex", flexDirection: "column" }}
                >
                    <Typography
                        variant="h3"
                        sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}
                    >
                        Sign in 
                    </Typography>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        sx={{ marginBottom: "25px" }}
                        onChange={getformData}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        sx={{ marginBottom: "10px" }}
                        onChange={getformData}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "15px",
                        }}
                    >
                        <div>
                            <Checkbox /> <span>Keep me signed in</span>{" "}
                        </div>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: "14px", marginTop: "9px", marginRight: "10px" }}
                        >
                            Reset password
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#572afb", color: "white " }}
                        onClick={loginHandler}
                    >
                        Sign in
                    </Button>
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        or
                    </Typography>
                   

                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#4285f4", color: "white " }}
                        startIcon={<GoogleIcon />}
                        onClick={() => {
                            window.location.href = "https://user-information-project.herokuapp.com/auth/google"
                        }}
                    >
                        Continue With Google
                    </Button>
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "15px",
                            marginBottom: "10px",
                        }}
                    >
                        <Link to="/SignUp">Create your account</Link>
                    </Typography>
                </Paper>
            </Box>
            <ToastContainer />
        </>
    );
};
