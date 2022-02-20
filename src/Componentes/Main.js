import React from "react";

import Gallery from './Carrusel';
import fondo from '../recursos/peakpx(1).jpg'

const Main = () => {
    return (
        <main id="principal">
            <img id="fondo" src={fondo} />
            <h1>
                MyTinerary
            </h1>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            <Gallery />

            <button id="llamada">Fly to your dreams</button>
        </main>
    )

}

export default Main