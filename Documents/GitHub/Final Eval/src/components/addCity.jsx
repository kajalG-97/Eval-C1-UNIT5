import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { addCityData } from '../redux/CityAction';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getCountryDataList } from '../redux/countryAction';



export const AddCity = () => {

    const dispatch = useDispatch();

    const { list, loding } = useSelector((store) => store.country);
    console.log('list', list);

    const getCountry = () => {
        dispatch(getCountryDataList())
    }

    React.useEffect(() => {
        getCountry();
    }, []);

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
            <br />
            <TextField required value={population} id="population" label="population" onChange={handleChange} />
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
                Add City
            </Button>
        </Box>
    )
}