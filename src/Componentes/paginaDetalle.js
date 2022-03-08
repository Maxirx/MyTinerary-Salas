import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ActionAreaCard from './Carta'

import './barra.css'
import axios from 'axios';
import CiudadDetalle from './detalle'

const PaginaDetalles = () => {

    const [apiCiudades, setApiCiudades] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:4000/api/todaslasciudades`)
            .then(response => setApiCiudades(response.data.respuesta.ciudades))
    }, [])

    const { id } = useParams()

    console.log(id);
    const carta = apiCiudades.filter(dato => dato._id == id)
    console.log(carta);
    var cartaR = []
    cartaR.push(...carta)
    console.log(cartaR);




    return (
        <main id="principal2">
            <h1>
                Under Construction
            </h1>


            <CiudadDetalle datos={cartaR} />




        </main>
    )

}

export default PaginaDetalles