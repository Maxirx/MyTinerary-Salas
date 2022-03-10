import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './barra.css'
import { Link as LinkRouter } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MensajeNegativo from './MensajeNegativo';


export default function CiudadDetalle(props) {
    console.log(props.dataR);


    const cartaID = (props.dataR)
    console.log(cartaID);





    return (

        cartaID.length > 0
            ? (cartaID.map((carta) => {

                return (
                    <div >
                        <Card sx={{ maxWidth: 345 }} key={carta}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={140}
                                    width={140}
                                    image={carta.imageCity}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" key={carta}>
                                        {carta.itinerary}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" key={carta}>
                                        <p>Time:{"⌛".repeat(parseInt(carta.duration))}</p> <p>cost:{"💸".repeat(parseInt(carta.price))}
                                        </p><p>{carta.hashtags}</p>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" key={carta}>
                                        <p><img src={`${carta.photo}`} style={{ height: "3rem" }} /></p> <p>{carta.user}</p>
                                    </Typography>
                                    <LinkRouter to={"/cities"}> <button>volver</button></LinkRouter>

                                    <div>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography>View More</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Under Construction
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>


                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>)
            })
            ) : (<MensajeNegativo />)

    );

}