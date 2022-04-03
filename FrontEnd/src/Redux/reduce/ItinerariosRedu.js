

const initialState = {
    itineraries: [],
    aux: []
}

const ItinerariesRedu = (state = initialState, action) => {

    /*     console.log(action); */
    /*     switch (action.type) {
            case 'fetchIti':
                return {
                    ...state,
                    itineraries: action.payload,
                }
    
        } */
    switch (action.type) {
        case "ItiByCiudad":
            return {
                ...state,
                itineraries: action.payload
            }
        default:
            return (
                state)

    }
}


export default ItinerariesRedu 