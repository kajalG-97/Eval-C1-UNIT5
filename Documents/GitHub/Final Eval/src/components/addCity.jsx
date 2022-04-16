import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { addCityData } from '../redux/CityAction';
import { useDispatch } from 'react-redux';

export const AddCity = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        city: "",
        population: "",
        country: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ 
            ...formData,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCityData(formData))
    
    }
    const { city, population, country } = formData;
    return (
        <Box
            component="form"

        >
            <TextField
                required value={city}
                id="city"
                label="city"
                onChange={handleChange}
            />
            <br />
            <br/>
            <TextField required value={population} id="population" label="population" onChange={handleChange} />
            <br />
            <br/>
            <TextField
                required value={country}
                id="country"
                label="contry name"
               onChange={handleChange}
            />
            <br />
            <br/>
            <Button onClick={handleSubmit} variant="contained" color="success">
                Add City
            </Button>
        </Box>
    )
}