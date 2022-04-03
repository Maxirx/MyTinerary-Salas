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

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import LikeButton from './Likes';
import { connect } from 'react-redux';
import ActivitiesActions from '../Redux/action/ActivitiesAction'
import Comentarios from './Comentarios'
import Comenta from './comenta';
import { height } from '@mui/system';
import "./barra.css"


const imagenStyle = {
    width: '150px',
    height: '80px'

}


function CiudadDetalle(props) {
    console.log(props);

    const [activities, setActivities] = useState([])

    const carta = (props.dataR)
    console.log(carta);


    useEffect(() => {
        console.log(carta._id);
        props.activityPerItinerary(carta._id)
            .then(res => { setActivities(res.response) })

    }, [carta])
    console.log(activities);

    return (



        <div key={carta._id}>
            <Card sx={{ maxWidth: 700 }} key={carta._id} /* style={{ maxWidth: "none" }} */>
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
                            </p><p>  {carta.hashtags.map((arrayHashtag, index) => (<a href='#' key={index}> {arrayHashtag}   </a>))}  </p>
                            <p>{/* {"❤".repeat(parseInt(carta.likes))} */}{<LikeButton Iti={carta} />}{/* Likes: {carta.likes.length} */}</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" key={carta}>
                            <p>subido por</p>
                            <p>   <Stack direction="row" spacing={0} display="flex" justifyContent="center">
                                <Avatar alt="avatar" src={`${carta.photo}`} />

                            </Stack></p> <p>{carta.user}</p>
                        </Typography>
                        <Stack spacing={5} direction="row">
                            <LinkRouter to={"/cities"}> <Button>volver</Button></LinkRouter>
                        </Stack>

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
                                        {activities?.length !== 0 ?
                                            (
                                                activities.map(activity => (



                                                    <div >
                                                        <img src={activity.imageCity && (activity.imageCity)} style={imagenStyle} ></img>
                                                        <h5 className="card-title">{activity.activityTitle}</h5>
                                                        <p className="card-text">{activity.activity}</p>
                                                    </div>

                                                ))) :
                                            (<div></div>)}
                                    </Typography>
                                    <Typography>
                                        {carta.comments.map((comment) => (
                                            <Comentarios itineraryId={props.ID} commentId={comment._id} comment={comment} key={comment._id} />
                                        ))

                                        }
                                    </Typography>
                                    <Typography>
                                        <Comenta itineraryId={carta._id} setReload={props.setReload} reload={props.reload} />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                        </div><div>


                        </div>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div >


    );

}


const mapDispatchToProps = {
    activityPerItinerary: ActivitiesActions.activityPerItinerary,

}

/* const mapStateToProps = (state) => {
    return {

        activities: state.activitiesReducers.activities,

    };
}; */


export default connect(null, mapDispatchToProps)(CiudadDetalle)