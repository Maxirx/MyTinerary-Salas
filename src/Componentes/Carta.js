import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Ciudades from '../Datos'
import ciudades from '../Datos';

export default function ActionAreaCard(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={140}
                    width={140}
                    image={props.Ciudades.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.Ciudades.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.Ciudades.country}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}