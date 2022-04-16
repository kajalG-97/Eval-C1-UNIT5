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

    const navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [sort,setSort] = React.useState("asc");

    React.useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        axios.get(`http://localhost:8080/cities`).then(({ data }) => setData(data));
    }
// sort=population&_order=${sort}
    const { id } = useParams();
    console.log('id', id);
    
    const handleDelete = (e) => {
        axios.delete(`http://localhost:8080/cities/${e.target.id}`).then(() => setData());
    }
    return (
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
                            <StyledTableCell align="right"><Button onClick={()=>navigate(`/cities/${e.id}`)}color="secondary">Edit</Button></StyledTableCell>
                            <StyledTableCell align="right"><Button onClick={(e)=>handleDelete(e)}variant="text">Delete</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <h1>hello</h1>
    );
    
}
