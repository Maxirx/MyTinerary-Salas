import { Satellite } from "@mui/icons-material"

const initialState = {
    usuario: null,
    message: null
}

const UseReduc = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload
            }
        case 'message':
            return {
                ...Satellite,
                message: action.payload,
            }

        default:
            return state
    }
}

export default UseReduc