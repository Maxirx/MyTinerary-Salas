
const initialState = {
    pais: [],
    auxiliar: []
}

const dataReducer = (state = initialState, action) => {
    /*     console.log(action) */

    switch (action.type) {
        case 'fetchPa':
            console.log(action.payload);
            return {
                ...state,
                pais: action.payload,
            }
        default:
            return (
                state)

    }
    /*     console.log(state.pais); */
}
export default dataReducer