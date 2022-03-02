import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './barra.css'
import { Link as LinkRouter } from "react-router-dom"


export default function CiudadDetalle(props) {
    console.log(props);
    const cartaID = (props.datos)

    console.log(cartaID);


    return (


        <div id='cartasPaises'>
            {cartaID.map((carta) => (
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={140}
                            width={140}
                            image={carta.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {carta.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {carta.country}
                            </Typography>
                            <LinkRouter to={"./cities"}> <button>volver</button></LinkRouter>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>

    );
}