const initialState = {
    ciudades: [],
    ciudadesFiltradas: [],
    aux: [],
    ciudad: {}

}

const CiudadesRedu = (state = initialState, action) => {
    // console.log(action);

    switch (action.type) {
        case 'push':

            return {
                ...state,
                ciudades: action.payload,
                ciudadesFiltradas: action.payload
            }

        case 'filtro':
            const { citiesArray, value } = action.payload
            const filtro = citiesArray.filter((ciudades => ciudades.name.toLowerCase().startsWith(value.toLowerCase().trim())))
            return {
                ...state,
                ciudadesFiltradas: filtro
            }
        case 'traerUna':
            return {
                ...state,
                ciudad: action.payload,

            }

        default:
            return state

    }
}

export default CiudadesRedu