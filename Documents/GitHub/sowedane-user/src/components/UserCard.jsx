import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export const UserCard = ({event}) => {
    return (
        <Card sx={{ minWidth: 275, boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}}>
            <CardContent>
                 <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                   {event.firstName} {event.lastName}
                </Typography>
                {/* <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography> */}
                <Typography sx={{ mb: 1.5 }} color="text.primery">
                   Mobile: {event.mobile}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.success">
                   Gender: {event.gender}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   City: {event.city}
                </Typography>
                <Typography sx={{ mb: 1.5 ,p:1}} color="text.secondary">
                   Email: {event.email}
                </Typography>
                <Typography sx={{ mb: 1.5, p: 1 }} color="text.secondary">
                    Date Of Birth: {event.date_of_birth}
                </Typography>

                {/* <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography> */}
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
