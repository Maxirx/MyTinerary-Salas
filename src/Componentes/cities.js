import * as React from 'react';
import { useState } from 'react'
import DerivedState from './Busqueda'
import ActionAreaCard from './Carta'
import Ciudades from '../Datos'
import './barra.css'

const CiudadesPag = () => {
    const [input, setinput] = useState("")
    const [apiCiudades, setApiCiudades] = useState([...Ciudades])




    return (
        <main id="principal2">
            <h1>
                Under Construction
            </h1>
            <form action=""><label for="text">Buscar</label>
                <input type="text" onKeyPress={(event) => setinput(event.target.value)} id="text"></input>
            </form>
            <div id='contenedorCartas'>

                (<div id='cartasPaises'><ActionAreaCard buscador={input} Ciudades={apiCiudades} /></div>)
            </div>


        </main>
    )

}

export default CiudadesPag