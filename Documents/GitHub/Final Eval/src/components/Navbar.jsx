import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <Box sx={{ mt:4,display: "flex", justifyContent: "space-around" }}>
           
            <Link to={"/add-country"}><Button variant="contained">Country Add</Button></Link>
            <Link to={"/add-city"}><Button variant="contained">City Add</Button></Link>
            <Link to={"/"}><Button variant="contained">Home</Button></Link>

        </Box>
    )
}