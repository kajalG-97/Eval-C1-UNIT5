import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';
import { getCountryDataList } from '../redux/countryAction';
import { cityLoding } from '../redux/CityAction';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export const Home = () => {

    const getCountry = () => {
        dispatch(getCountryDataList())
    }

    React.useEffect(() => {
        getCountry();
    }, []);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { loding } = useSelector((store) => store.city);

    const { list } = useSelector((store) => store.country);
    console.log('list', list);

    const [data, setData] = React.useState([]);
    const [sort, setSort] = React.useState("asc");

    const [country_name, SetCountry_name] = React.useState("");
    React.useEffect(() => {
        getData();
    }, [sort, country_name]);

    const getData = () => {
        axios.get(`http://localhost:8080/cities?${country_name}&_sort=population&_order=${sort}`).then(({ data }) => setData(data));
    }

    const { id } = useParams();
    console.log('id', id);

    const handleDelete = (e) => {
        dispatch(cityLoding());
        axios.delete(`http://localhost:8080/cities/${e.target.id}`).then(() => getData());
        
    }

    const handleSort = (e) => {
        if (e.target.id === "country") {
            SetCountry_name(`country=${e.target.value}`)

        }
        if (e.target.id === "sortByAsc") {
            setSort("asc");
        } if (e.target.id === "sortByDesc") {
            setSort("desc");
        }


    }



    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : (
        <Box>
            <Box sx={{ m: 2, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <Button id="sortByAsc" onClick={handleSort} variant="outlined">Population Asc</Button>
                <Button id="sortByDesc" onClick={handleSort} variant="outlined">Population Desc</Button>

                <select name="country" id="country" onChange={handleSort}>
                    <option value="">select country</option>
                    {list ? list.map((e) => {
                        return <option key={e.id} id="country" value={e.country}>{e.country}</option>
                    }) : ""}
                </select>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">ID</StyledTableCell>
                            <StyledTableCell>Country</StyledTableCell>
                            <StyledTableCell align="right">City</StyledTableCell>
                            <StyledTableCell align="right">Population</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((e) => (
                            <StyledTableRow key={e.id}>
                                <StyledTableCell align="left">{e.id}</StyledTableCell>
                                <StyledTableCell >
                                    {e.country}
                                </StyledTableCell>
                                <StyledTableCell align="right">{e.city}</StyledTableCell>
                                <StyledTableCell align="right">{e.population}</StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={() => navigate(`/cities/${e.id}`)} color="secondary">Edit</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button id={ e.id} onClick={(e) => handleDelete(e)} variant="text">Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );

}
