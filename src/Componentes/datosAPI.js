import React, { useEffect } from "react";
import { useState } from "react";
import { obtenerTodasLasCiudades, agregarCiudad, eliminarCiudad } from "../apicalls";


export default function datosAPI() {
    const [cities, setCities] = useState()
    const [recargar, setRecargar] = useState(false)

    function suprimirCiudad(id) {
        eliminarCiudad(id)
        setRecargar(!recargar)
    }

    const presionarSubmit = (event) => {
        event.preventDefault();
        const datos = new FormData(event.currentTarget);
        var input = {
            name: datos.get('City'),
            country: datos.get('Country'),
            continent: datos.get('continent'),
            image: datos.get('Image')
        };

        agregarCiudad(input)
        setRecargar(!recargar)

    }

    useEffect(() => {
        obtenerTodasLasCiudades()
            .then(respuesta => setCities(respuesta.datos.response.ciudades))
    }, [recargar])


    return (

        <div>
            {
                cities?.map(lugares =>

                    <ul>
                        <li>{lugares.name}, {lugares.pais},{lugares.imagen}
                            <div><button onClick={() => suprimirCiudad(lugares._id)}>Delete</button></div ></li >
                    </ul>


                )
            }</div >
    )
} 