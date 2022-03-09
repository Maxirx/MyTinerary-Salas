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
    filtoPorItiCiudad: (city) => {
        console.log(city);
        return async (dispatch, getState) => {
            try {
                var response = await axios.get(`http://localhost:4000/api/itinerario/${city}`)
                console.log(response);

                dispatch({ type: "ItiByCiudad", payload: response.data.respuesta })

            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    },
}

export default ItinerariosAct 