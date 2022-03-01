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

    const modificarDB = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console

        var dataInput = {
            nombre: data.get('Ciudad'),
            pais: data.get('Pais'),
            descripcion: data.get('Descripcion')
        };

        modificarCiudad(modid, dataInput)
        setReload(!reload)
        console.log(dataInput)
    };


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

        <><div>
            {cities?.map(lugares => <ul>
                <li>{lugares.name}, {lugares.pais},{lugares.imagen}
                    <div><button onClick={() => suprimirCiudad(lugares._id)}>Delete</button></div></li>
            </ul>


            )}</div><div>
                <form action="">


                    <div><label for="City">City</label><input id="City" type="text" /></div>
                    <div><label for="Country">Country</label><input id="Country" type="text" /></div>
                    <div><label for="Continent">Continent</label><input id="Continent" type="text" /></div>
                    <div><label for="Image">Image</label><input id="Image" type="url" /></div>
                    <input onsubmit={presionarSubmit} type="submit" />
                </form>
            </div></>


    )
}  