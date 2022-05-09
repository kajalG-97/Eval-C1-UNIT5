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

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

import { adminloginSuccessData } from "../redux/admin/adminAction";




export const AdminSignIn = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();


    const { loding, error } = useSelector((store) => store.admin);


    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const getformData = (e) => {
        let { id, value } = e.target;

        setData({ ...data, [id]: value });

    };


    const adminloginHandler = (e) => {
        // validation for email and password

        e.preventDefault();

        dispatch(adminloginSuccessData(data, toast, navigate))
    }



    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
        <>

            <Box style={{ backgroundColor: "#ebe7ff", height: "660px", marginTop: 0 }}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                        m: 1,
                        width: 450,
                        height: 350,
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
                        Sign in with your Admin account
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

                    </Box>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#572afb", color: "white " }}
                        onClick={adminloginHandler}
                    >
                        Sign in
                    </Button>

                </Paper>
            </Box>
            <ToastContainer />
        </>
    );

};

