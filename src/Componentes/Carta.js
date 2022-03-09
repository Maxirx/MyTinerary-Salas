import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as LinkRouter } from "react-router-dom"



export default function ActionAreaCard(props) {
    console.log(props);



    return (
        props.ciudades.length > 0 ? (
            props.ciudades.map((resultado) => {

                return (
                    <div id='cartasPaises'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea><LinkRouter to={`detalle/${resultado._id}`}>
                                <CardMedia
                                    component="img"
                                    height={140}
                                    width={140}
                                    image={resultado.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {resultado.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {resultado.country}
                                    </Typography>

                                </CardContent></LinkRouter>
                            </CardActionArea>
                        </Card></div>)
            })
        ) :
            (
                <h2>Not Found  :(</h2>
            )


    )

        ;
}