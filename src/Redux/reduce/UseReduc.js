

const initialState = {
    usuario: null,
    snackbar: {
        view: false,
        message: '',
        success: false
    },
}

const UseReduc = (state = initialState, action) => {

    switch (action.type) {
        case 'user':
            console.log(action.payload);
            return {
                ...state,
                usuario: action.payload
            }
        case 'message':
            console.log(action.payload);
            return {
                ...state,
                snackbar: action.payload,
            }

        default:
            return state
    }
}

export default UseReduc