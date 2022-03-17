import axios from "axios"

const PaisesAct = {
    GetPaises: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://restcountries.com/v2/all?fields=name')

            console.log(res);
            dispatch({ type: 'push', payload: res.data.respuesta.paises })
        }
    }

}

export default PaisesAct