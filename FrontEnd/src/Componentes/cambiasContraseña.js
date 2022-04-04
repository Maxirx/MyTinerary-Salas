import * as React from 'react';

import axios from "axios";

const CambiarConstraseña = (props) => {

    console.log(props);


    const cambiarContraseña = async (event) => {
        console.log(event);
        const token = localStorage.getItem('token')
        var contra = event.target[0].value



        await axios.put(`http://localhost:4000/api/auth/cambiarContraseña`, { contra }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        ).then(response => console.log(response.data.respuesta))

    }


    return (
        <form onSubmit={cambiarContraseña} >
            <label>
                Cambia tu Contraseña
            </label>
            <input type="text" name='password' placeholder='new Password' />

        </form>
    )
}

export default CambiarConstraseña