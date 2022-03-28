
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { connect } from "react-redux";
/* import citiesActions from "../Redux/action/CiudadesAct"; */
/* import itinerariesActions from '../../Redux/actions/itinerariesActions'; */
/* import commentsActions from '../../Redux/actions/commentsActions'; */
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';

import ItinerariosAct from '../Redux/action/itinerariosAct';
import comentariosAcciones from '../Redux/action/comentariosAcciones';
import CiudadesAct from '../Redux/action/CiudadesAct';
import ActivitiesActions from '../Redux/action/ActivitiesAction';


const Comments = (props) => {
    console.log(props)
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { id } = useParams()
    const input = useRef()
    const [inputText, setInputText] = useState("")
    const [modify, setModify] = useState(false)
    const [reload, setReload] = useState(false)

    console.log(props.commentId);
    async function modificarComentario(commentId) {
        const commentData = {
            comment: input.current.value,
        }
        console.log(modify)
        setModify(!modify)
        await props.modifiComment(commentId, commentData)
        props.getOneItinerary(id)
        props.findOneCity(id)
        props.itinerariesPerCity(id)
        setReload(!reload)


    }
    async function eliminarComentario(commentId) {
        const commentData = {
            commentId: commentId,
        }
        const awaitDelete = await props.deleteComment(props.itineraryId, commentData)
        console.log(commentData)
        console.log(awaitDelete)


        if (awaitDelete.success) {
            props.buscarCiudadesPorID(id)
            props.filtoPorItiCiudad(id)
            console.log("eliminadoOoOOo")
            // props.findOneCity(id)
        }
    }




    console.log(props.comment)
    return (
        <>
            {props.comment.userID?._id !== props.user?.id ?
                <div className="card cardComments " key={props.comment._id}>
                    <div className="card-header cardHeader">
                        {props.comment.userID?.name}
                    </div>
                    <div className="card-body">
                        <p className="card-text cardText">{props.comment.comment}</p>
                    </div>

                </div> :

                <div className="card cardComments">
                    <div className="card-header cardHeader">
                        <p>{props.comment.userID.name}</p>
                    </div>
                    <div className="card-body ">
                        <div type="text" className="card-text textComments" >
                            {modify
                                ? <input defaultValue={props.comment.comment} ref={input} />
                                : <p>{props.comment.comment}</p>
                            }
                        </div>
                        {modify
                            ? (
                                <>
                                    <button id={props.comment._id} onClick={() => modificarComentario(props.commentId)} className="btn btn-primary btnComments">Confirm Modify</button>
                                    <button id={props.comment._id} onClick={() => setModify(!modify)} className="btn btn-primary">Cancel</button>
                                </>
                            )
                            : <button id={props.comment._id} onClick={() => setModify(!modify)} className="btn btn-primary">Modify</button>
                        }
                        <button id={props.commentId} onClick={() => eliminarComentario(props.commentId)} className="btn btn-primary btnComments">Eliminar</button>
                    </div>
                </div>
            }
        </>
    )
}

const mapDispatchToProps = {
    buscarCiudadesPorID: CiudadesAct.buscarCiudadesPorID,
    obtenerIti: ItinerariosAct.obtenerIti,
    filtoPorItiCiudad: ItinerariosAct.filtoPorItiCiudad,
    addComment: comentariosAcciones.addComment,
    modifiComment: comentariosAcciones.modifiComment,
    deleteComment: comentariosAcciones.deleteComment,
    likeDislike: ItinerariosAct.likeDislike,
    activityPerItinerary: ActivitiesActions.activityPerItinerary,
};



const mapStateToProps = (state) => {
    return {
        ciudad: state.ciudad,
        /*         itineraries: state.ItinerariesRedu.itineraries, */
        usuario: state.UseReduc.usuario,
        activities: state.activitiesReducers.activities,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
