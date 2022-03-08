import axios from "axios"
import ciudades from "../../Datos"


const CiudadesAct = {
    pushCiudades: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/todaslasciudades')
            /* .then(res = dispatch({ tipe: 'push', payload: res.data.respuesta })) */
            console.log(res);
            dispatch({ type: 'push', payload: res.data.respuesta })
        }

    },

    deletearCiudades: (id) => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            console.log(token);
            try {
                const res = await axios.delete('http://localhost:4000/api/todaslasciudades' + id, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            } catch (error) {
                console.log(error);

            }
        }
    },
    filtro: (apiCiudades, value) => {
        return (dispatch, getState) => {
            dispatch({ type: 'filtro', payload: { apiCiudades, value } })
        }
    },

    /*     cargarCiudad: (name, country, image, continent) => {
            const respuesta = axios.post('http://localhost:4000/api/todaslasciudades', { name, country, image, continent })
            dispatch({ type: 'cargarCiudades', payload: respuesta.data.respuesta })
        } */
}



export default CiudadesAct