import React from "react";

import Galeria from './Carrusel';
import { Link as LinkRouter } from 'react-router-dom'


const Main = () => {

    const font = 'font-size:0.3rem'
    return (
        <main id="principal">
            <h1>
                MyTinerary<sup style={{ fontSize: "1rem" }}>®</sup>
            </h1>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!<sup style={{ fontSize: "1rem" }}>™</sup></h2>
            <Galeria />

            <button id="llamada" style={{ width: "20rem" }}><LinkRouter to='/cities' id="LetrasEnBlanco" >Fly to your Dreams!<sup style={{ fontSize: "1rem" }}>™</sup> </LinkRouter></button>
        </main>
    )

}

export default Main