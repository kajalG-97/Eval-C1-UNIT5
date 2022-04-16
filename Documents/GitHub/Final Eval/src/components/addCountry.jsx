import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCountryData } from '../redux/countryAction';
import { useNavigate } from 'react-router-dom';

export const AddCountry = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [data, setData] = React.useState({

        country: "",
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setData({
            ...data,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCountryData(data));
        navigate("/");
    }
    const { country } = data;
    return (
        <div
            component="form"

        >
            <br />
            <br />
            <TextField
                required value={country}
                id="country"
                label="contry name"
                onChange={handleChange}
            />
            <br />
            <br />
            <Button onClick={handleSubmit} variant="contained" color="success">
                Add country
            </Button>
        </div>
    )
}