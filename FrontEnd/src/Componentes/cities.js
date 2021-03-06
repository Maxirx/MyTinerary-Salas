import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'

import ActionAreaCard from './Carta'

import './barra.css'
import axios from 'axios';
import { connect } from 'react-redux';
import CiudadesAct from '../Redux/action/CiudadesAct';
import { Search } from '@mui/icons-material';

const CiudadesPag = (props) => {
    console.log(props);

    useEffect(() => {
        props.pushCiudades()
    }, [])


    const search = (e) => props.filtro(props.ciudades, e.target.value)
    return (
        <main id="principal2">
            <div style={{ marginBottom: "2rem" }}>
                <h1>
                    Search Cities
                </h1>
                <form action="">
                    <label for="text" style={{ color: "white" }}>Search</label>
                    <input type="text" onChange={search} id="text"></input>
                </form></div>
            <div id="contenedorCartas">


                {
                    <ActionAreaCard ciudades={props.ciudadesFiltradas} />
                }

            </div>


        </main >
    )

}

const mapStateToProps = (state) => {
    return {
        ciudades: state.CiudadesRedu.ciudades,
        ciudadesFiltradas: state.CiudadesRedu.ciudadesFiltradas
    }
}

const mapDispatchToProps = {
    pushCiudades: CiudadesAct.pushCiudades,
    filtro: CiudadesAct.filtro
}



export default connect(mapStateToProps, mapDispatchToProps)(CiudadesPag);