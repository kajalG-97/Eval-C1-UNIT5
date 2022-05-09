import * as React from 'react';
import AppBar from '@mui/material/AppBar';



import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { logoutUser } from '../redux/auth/authAction';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "rgb(34,34,34)",
        },
    },
});




export const HomeNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector((store) => store.auth);
    const { user } = useSelector((store) => store.auth);

    const sample= useSelector((store) => store.admin);
    console.log('sample', sample);
    
   
    // if(user.admin && user.admin)

    const admin = useSelector((store) => store.status);
    console.log('admin', admin);
   

    

    return   

    //     <Box sx={{ flexGrow: 1 }}>
    //         <AppBar position="static">
    //             <Toolbar>
    //                 <HomeIcon onClick={() => navigate("/")} sx={{ mr: 2 }} fontSize="large" />
    //                 <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
    //                     SOWEDANE
    //                 </Typography>
    //                 <Link to={"/SignIn"}>
    //                     <Button sx={{ m: 1, color: "#f2f2ff", textDecoration: "none" }} color="inherit"> Login</Button>
    //                 </Link>

    //             </Toolbar>
    //         </AppBar>
    //     </Box>
        // ) : 
        (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <HomeIcon onClick={() => navigate("/mainHome")} sx={{ mr: 2 }} fontSize="large" />
                        <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                            SOWEDANE
                        </Typography>

                            {!admin ? <Link to={"/userpage"}><Button sx={{ m: 1, color: "#f2f2ff", textDecoration: "none" }} color="inherit">User</Button></Link>
                                : <Button onClick={(e) => navigate(`/editpage`)}
                                    sx={{ m: 1, color: "#f2f2ff", textDecoration: "none" }} color="inherit" id>Hi!  {user.user && user.user.firstName} </Button>}
                        <Link underline="none" to={"/"}><Button onClick={() => dispatch(logoutUser())} sx={{ m: 1, color: "#f2f2ff" }} color="inherit">Logout</Button></Link>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}