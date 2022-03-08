import axios from "axios"


const ItinerariosAct = {
    itinerariosPorCiudad: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get('/itinerario/' + id)
            console.log(res);
            dispatch({ type: 'fetch', payload: res.data })
        }
    }
}

export default ItinerariosAct 