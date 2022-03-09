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

    /*     const [input, setinput] = useState("")
        const [apiCiudades, setApiCiudades] = useState([])
    
    
        useEffect(() => {
            props.pushCiudades()
        }, [])
    
        const setBusqueda = (search) => {
            setinput(search.target.value)
            props.filtro(props.ciudades, search.target.value)
        }
    
        console.log(props);
    
     */

    return (
        <main id="principal2">
            <h1>
                Under Construction
            </h1>
            <form action=""><label for="text">Buscar</label>
                <input type="text" /* onChange={(event) => setBusqueda(event.target.value)} */ id="text"></input>
            </form>
            <div id="contenedorCartas">


                {/* <ActionAreaCard buscador={props.input} Ciudades={props.ciudadesFiltradas} /> */}

            </div>


        </main>
    )

}

const mapStateToProps = (state) => {
    return {
        /* ciudades: state.Data.ciudades, */
        ciudadesFiltradas: state.Data.ciudadesFiltradas
    }
}

const mapDispatchToProps = {
    pushCiudades: CiudadesAct.pushCiudades,
    filtro: CiudadesAct.filtro
}



export default connect(mapStateToProps, mapDispatchToProps)(CiudadesPag);