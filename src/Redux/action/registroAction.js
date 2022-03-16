const { default: axios } = require("axios")


const UserActions = {

    registroUser: (datosUsuario) => {

        return async (dispatch, getState) => {

            const respuesta = await axios.post('http://localhost:4000/api/auth/signUp', { datosUsuario })
            dispatch({ type: 'message', payload: respuesta.data })
        }


    },
    singIn: (usuarioLogeado) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', { usuarioLogeado })
            if (user.data.succes) {
                dispatch({ type: 'user', payload: user.data.response.datosUsuario })
            } else {
                console.log(user.data.message);

            }
        }


    },
    signOut: (closeuser) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/auth/signOut', { closeuser })
            dispatch({ type: 'user', payload: null })
        }

    }

}

export default UserActions 