import React from "react";

import Galeria from './Carrusel';
import { Link as LinkRouter } from 'react-router-dom'


const Main = () => {
    return (
        <main id="principal">
            <h1>
                MyTinerary
            </h1>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            <Galeria />

            <button id="llamada"><LinkRouter to='/cities' id="LetrasEnBlanco">Fly to your Dreams! </LinkRouter></button>
        </main>
    )

}

export default Main