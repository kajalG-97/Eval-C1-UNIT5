import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../Navbar/Navbar";
import axios from "axios";
function Profile(props) {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const handleImageUpload = (e) => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    const name = localStorage.getItem("user");
    const s = useSelector((store) => store.auth);
    // console.log("store", s);
    const user = JSON.parse(localStorage.getItem("UserData"));
    // console.log("user:", user);

    const [data, SetData] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("id");
        axios
            .get(`https://server-monks-backend.herokuapp.com/clubs/${id}`)
            .then(({ data }) => {
                // console.log("data", data);
                SetData(data);
            });
    }, []);

    return (
        <div>
            <ResponsiveAppBar />
            <br />
            <br />
            <br />
            <br />
            <div className="main-card">
                <div
                    style={{
                        marginTop: "30px",
                        boxShadow:
                            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    }}
                    className="card-container"
                >
                    <header>
                        <img
                            style={{
                                margin: "auto",
                                width: "100px",
                                height: "100px",
                                border: "solid white 4px",
                                borderRadius: "50%",
                                marginTop: "75px",
                            }}
                            // src={user.user_img}
                            ref={uploadedImage}
                            alt=""
                        />
                    </header>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            ref={imageUploader}
                            placeholder="Upload"
                            style={{
                                display: "none",
                            }}
                        />
                        <div
                            style={{
                                height: "30px",
                                width: "130px",
                                padding: "5px",
                                border: "1px dashed black",
                                backgroundColor: "#cbc5c5a8",
                            }}
                            onClick={() => imageUploader.current.click()}
                        >
                            Upload Profile
                        </div>
                    </div>
                    <h1
                        style={{ color: "blue", marginTop: "10px" }}
                        className="bold-text"
                    >
                        {name} <span className="normal-text"></span>
                    </h1>
                    <h2 className="normal-text">{user.email}</h2>
                    <Box
                        sx={{
                            border: 0,
                            p: 3,
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Box
                            sx={{
                                border: 0,
                                width: "40%",
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                sx={{ border: 0, color: "#545454", fontWeight: "bold" }}
                            >
                                My Clubs
                            </Typography>
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                sx={{ border: 0, color: "#545454", fontWeight: "bold" }}
                            >
                                {data.length}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                border: 0,
                                display: "flex",
                                width: "40%",
                                justifyContent: "space-around",
                            }}
                        >
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                sx={{ border: 0, fontWeight: "bold", color: "#545454" }}
                            >
                                Subscribed
                            </Typography>
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                sx={{ border: 0, color: "#545454", fontWeight: "bold" }}
                            >
                                {user.suscribed_ids.length}
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export { Profile };