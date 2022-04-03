
import * as React from 'react';

import { connect } from "react-redux";

import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';

import ItinerariosAct from '../Redux/action/itinerariosAct';
import comentariosAcciones from '../Redux/action/comentariosAcciones';
import CiudadesAct from '../Redux/action/CiudadesAct';
import ActivitiesActions from '../Redux/action/ActivitiesAction';


const Comentarios = (props) => {
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
        props.obtenerIti(id)
        props.buscarCiudadesPorID(id)
        props.filtoPorItiCiudad(id)
        setReload(!reload)


    }
    async function eliminarComentario(commentId) {
        const commentData = {
            commentId: commentId,
        }
        const awaitDelete = await props.deleteComment(props.itineraryId, commentData)



        if (awaitDelete.success) {
            props.buscarCiudadesPorID(id)
            props.filtoPorItiCiudad(id)
        }
    }



    console.log(props.usuario)
    console.log(props.comment)
    return (
        <>
            {props.comment.userID !== props.usuario?.id ? (
                <div key={props.comment._id}>
                    <div >
                        {props.comment.userID?.name}
                    </div>
                    <div >
                        <p >{props.comment.comment}</p>
                    </div>
                </div>)
                :

                (<div >
                    <div >
                        <p>{props.comment.userID.name}</p>
                    </div>
                    <div >
                        <div type="text" >
                            {modify
                                ? <input defaultValue={props.comment.comment} ref={input} />
                                : <p>{props.comment.comment}</p>
                            }
                        </div>
                        {modify
                            ? (
                                <>
                                    <button id={props.comment._id} onClick={() => modificarComentario(props.commentId)} >Confirm Modify</button>
                                    <button id={props.comment._id} onClick={() => setModify(!modify)} >Cancel</button>
                                </>
                            )
                            : <button id={props.comment._id} onClick={() => setModify(!modify)} >Modify</button>
                        }
                        <button id={props.commentId} onClick={() => eliminarComentario(props.commentId)} >Eliminar</button>
                    </div>
                </div>)
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
        itineraries: state.itineraries,
        usuario: state.UseReduc.usuario,
        activities: state.activitiesReducers.activities,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comentarios);
