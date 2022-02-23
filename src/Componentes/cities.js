import * as React from 'react';
import DerivedState from './Busqueda'
import ActionAreaCard from './Carta'
import Ciudades from '../Datos'
import './barra.css'

const CiudadesPag = () => {


    return (
        <main id="principal2">
            <h1>
                Under Construction
            </h1>
            <form action=""><label for="text">Buscar</label>
                <input type="text" id="text"></input>
            </form>
            <div id='contenedorCartas'>
                {Ciudades.map(x =>
                    (<div id='cartasPaises'><ActionAreaCard Ciudades={x} /></div>))}
            </div>


        </main>
    )

}

export default CiudadesPag