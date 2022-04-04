
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import CiudadesAct from "../Redux/action/CiudadesAct";
import ItinerariosAct from '../Redux/action/itinerariosAct';
import comentariosAcciones from '../Redux/action/comentariosAcciones';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActivitiesActions from '../Redux/action/ActivitiesAction';

const Comenta = (props) => {
    console.log(props);

    const { id } = useParams()

    const [inputText, setInputText] = useState("")






    const cargarComentario = async () => {
        const commentData = {
            comment: inputText,
        }
        const cargarAwait = await props.addComment(props.itineraryId, commentData)

        if (cargarAwait.success === true) {
            setInputText("")
            props.buscarCiudadesPorID(id)
            props.activityPerItinerary(id)
            console.log(cargarAwait);
            props.setReload(!props.reload)
            console.log(!props.reload);
        }
    }

    return (
        <>
            {props.usuario ?
                <div className="card cardComments">
                    <div className="card-header cardHeaderNew">
                        Leave us a comment
                    </div>
                    <div className="card-body ">
                        <div >
                            <input type="text" id="nuevoComentario" placeholder='Ingresa aqui tu comentario...' className="card-text textComments border border-dark mb-3" value={inputText} onChange={(event) => setInputText(event.target.value)} />
                        </div>
                        <button onClick={cargarComentario} className="btn btn-primary btnComments">Cargar</button>
                    </div>
                </div> :
                <h5>Please, sigIn for Comments</h5>
            }
        </>


    );




}



const mapDispatchToProps = {
    buscarCiudadesPorID: CiudadesAct.buscarCiudadesPorID,
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


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comenta);
