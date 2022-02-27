import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'

import ActionAreaCard from './Carta'

import './barra.css'
import axios from 'axios';

const CiudadesPag = () => {
    const [input, setinput] = useState("")
    const [apiCiudades, setApiCiudades] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:4000/api/todaslasciudades`)
            .then(response => setApiCiudades(response.data.respuesta.ciudades))


        axios.get(`http://localhost:4000/api/todaslasciudades`)
            .then(response => console.log(response.data.respuesta.ciudades))
    }, [])

    return (
        <main id="principal2">
            <h1>
                Under Construction
            </h1>
            <form action=""><label for="text">Buscar</label>
                <input type="text" onKeyUp={(event) => setinput(event.target.value)} id="text"></input>
            </form>
            <div id="contenedorCartas">


                <ActionAreaCard buscador={input} Ciudades={apiCiudades} />

            </div>


        </main>
    )

}

export default CiudadesPag