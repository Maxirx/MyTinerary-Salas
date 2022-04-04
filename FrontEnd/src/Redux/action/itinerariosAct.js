import axios from "axios"


const ItinerariosAct = {
    /*     itinerariosPorCiudad: (id) => {
            return async (dispatch, getState) => {
                const res = await axios.get('/itinerario/' + id)
                console.log(res);
                dispatch({ type: 'fetch', payload: res.data })
            }
        },
     */

    obtenerIti: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itinerario/' + id)
            /* .then(res = dispatch({ tipe: 'push', payload: res.data.respuesta })) */
            /*     console.log(res); */
            return res
        }

    },
    filtoPorItiCiudad: (city) => {
        /*      console.log(city); */
        return async (dispatch, getState) => {
            try {
                var response = await axios.get(`http://localhost:4000/api/itinerarios/${city}`)
                console.log(response);

                dispatch({ type: "ItiByCiudad", payload: response.data.respuesta })

            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    },
    likeDislike: (id) => {
        const token = localStorage.getItem('token')
        /*         console.log(id); */
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/likes/${id}`, {},
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })
                console.log(response);
                return response

            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default ItinerariosAct 