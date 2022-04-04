import axios from "axios"
import ciudades from "../../Datos"


const CiudadesAct = {
    pushCiudades: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/todaslasciudades')
            /* .then(res = dispatch({ tipe: 'push', payload: res.data.respuesta })) */
            console.log(res);
            dispatch({ type: 'push', payload: res.data.respuesta.ciudades })
        }

    },

    /*     deletearCiudades: (id) => {
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
        }, */
    filtro: (citiesArray, value) => {
        return async (dispatch, getState) => {
            dispatch({ type: 'filtro', payload: { citiesArray, value } })
        }

    },

    /*     cargarCiudad: (name, country, image, continent) => {
            const respuesta = axios.post('http://localhost:4000/api/todaslasciudades', { name, country, image, continent })
            dispatch({ type: 'cargarCiudades', payload: respuesta.data.respuesta })
        } */
    buscarCiudadesPorID: (id) => {
        console.log(id);
        return async (dispatch, getState) => {

            const res = await axios.get('http://localhost:4000/api/todaslasciudades/' + id)

            dispatch({ type: 'traerUna', payload: res.data.respuesta })

        }
    },
}



export default CiudadesAct