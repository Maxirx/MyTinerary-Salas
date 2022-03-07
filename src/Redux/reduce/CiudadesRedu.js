const initialState = {
    name: [],
    country: [],
    image: [],
    continent: []

}

const CiudadesRedu = (state = initialState, action) => {

    switch (action.type) {
        case 'push':

            return {
                ...state,
                name: action.payload,
                country: action.payload,
                image: action.payload,
                continent: action.payload
            }
        case 'deletear':
            return {
                ...state,
                name: action.payload
            }

        case 'cargarCiudades':
            let name = [...state.name]
            name.push(action.payload)
            return {
                ...state,
                name,
                country,
                image,
                continent

            }

        case 'filtrar':
            const filtro = action.payload.ciudades.filter((ciudades => ciudades.name.toLowerCase().startWith(action.payload.value.toLowerCase())))
            return {
                ...state,
                name: filtro
            }


        default:
            return state

    }
}

export default CiudadesRedu