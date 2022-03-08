

const initialState = {
    itineraries: [],
    aux: []
}

const ItinerariesRedu = (state = initialState, action) => {
    switch (action.type) {
        case 'fetchIti':
            return {
                ...state,
                itineraries: action.payload,
            }
        default:
            return state
    }
}

export default ItinerariesRedu 