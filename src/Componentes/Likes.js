import React, { useState, useEffect } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "../recursos/hand.svg";
import axios from "axios";
import { connect } from 'react-redux';

import "./likes.scss";
import UserActions from "../Redux/action/registroAction";
import ItinerariosAct from "../Redux/action/itinerariosAct"
import { SettingsInputAntenna } from "@material-ui/icons";

const particleList = Array.from(Array(10));

const LikeButton = (props) => {

    console.log(props);
    const [liked, setLiked] = useState(null);
    const [clicked, setClicked] = useState(false);
    const [likes, setLikes] = useState(props.Iti.likes);
    const user = props.usuario
    const [reload, setReload] = useState(false)
    const [itinerario, setItinerario] = useState()

    /*   const token = localStorage.getItem("token") */
    const id = props.Iti._id
    useEffect(() => {
        props.obtenerIti(id)
            .then(response => setItinerario(response.data.respuesta[0]))
    }, [!reload])






    const LikeDislike = async () => {
        const token = localStorage.getItem('token')
        //        console.log(id);
        console.log(token);

        await axios.put(`http://localhost:4000/api/likes/${itinerario._id}`, {}, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        ).then(response => setLikes(response.data.response))

    }

    console.log(itinerario);

    return (<>{props.usuario ?
        (<button
            onClick={() => {
                setLiked(!liked);
                setClicked(true);
                /* setLike(+1) */
                LikeDislike();
            }}
            onAnimationEnd={() => setClicked(true)}
            className={cn("like-button-wrapper", {
                liked,
                clicked,
            })}
        >
            {liked && (
                <div className="particles">
                    {particleList.map((_, index) => (
                        <div
                            className="particle-rotate" key={index}
                            style={{
                                transform: `rotate(${(360 / particleList.length) * index + 1
                                    }deg)`,
                            }}
                        >
                            <div className="particle-tick" />
                        </div>
                    ))}
                </div>
            )}
            <div className="like-button">
                <Hand />
                <span>Like</span>
                <span className={cn("suffix", { liked })}>d</span>
            </div>
        </button>)
        : (<button
            onClick={() => {
                setLiked(liked);
                setClicked(true);
                /* setLike(+1) */
                LikeDislike();
            }}
            onAnimationEnd={() => setClicked(true)}
            className={cn("like-button-wrapper", {
                liked,
                clicked,
            })}
        >
            {liked && (
                <div className="particles">
                    {particleList.map((_, index) => (
                        <div
                            className="particle-rotate" key={index}
                            style={{
                                transform: `rotate(${(360 / particleList.length) * index + 1
                                    }deg)`,
                            }}
                        >
                            <div className="particle-tick" />
                        </div>
                    ))}
                </div>
            )}
            <div className="like-button">
                <Hand />
                <span>Like</span>
                <span className={cn("suffix", { liked })}>d</span>
            </div>
        </button>)}{/* {like} */}Likes: {likes.length}</>
    );
};

const mapStateToProps = (state) => {
    return {
        usuario: state.UseReduc.usuario,
    }
}

const mapDispatchToProps = {
    obtenerIti: ItinerariosAct.obtenerIti
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
