import React from "react";

import Galeria from './Carrusel';


const Main = () => {
    return (
        <main id="principal">
            <h1>
                MyTinerary
            </h1>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            <Galeria />

            <button id="llamada">Fly to your dreams</button>
        </main>
    )

}

export default Main