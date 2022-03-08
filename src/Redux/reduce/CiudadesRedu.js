const initialState = {
    ciudades: [],
    aux: []

}

const CiudadesRedu = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'push':

            return {
                ...state,
                ciudades: action.payload,
                aux: action.payload
            }
        case 'deletear':
            return {
                ...state,
                ciudades: action.payload,
            }

        case 'cargarCiudades':
            let ciudades = [...state.ciudades]
            ciudades.push(action.payload)
            return {
                ...state,
                ciudades,
                aux: [...ciudades]


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