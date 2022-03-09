import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ActionAreaCard from './Carta'

import './barra.css'
import axios from 'axios';
import CiudadDetalle from './detalle'
import { connect } from 'react-redux';
import CiudadesAct from '../Redux/action/CiudadesAct';
import itinerariosAct from '../Redux/action/itinerariosAct'

const PaginaDetalles = (props) => {
    console.log(props);

    const [apiCiudades, setApiCiudades] = useState([])
    const { id } = useParams()

    useEffect(() => {
        console.log(id);
        props.buscarCiudadesPorID(id)
        props.filtoPorItiCiudad(id)

    }, []);








    return (
        <main id="principal2">
            <h1>
                Under Construction
            </h1>


            <CiudadDetalle dataR={props.itineraries} />




        </main>
    )

}

const mapStateToProps = (state) => {

    return {
        ciudad: state.CiudadesRedu.ciudad,
        itineraries: state.ItinerariosRedu.itineraries


    }
}
const mapDispatchToProps = {
    buscarCiudadesPorID: CiudadesAct.buscarCiudadesPorID,
    filtoPorItiCiudad: itinerariosAct.filtoPorItiCiudad
}


export default connect(mapStateToProps, mapDispatchToProps)(PaginaDetalles)