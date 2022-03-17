const { default: axios } = require("axios")


const UserActions = {

    registroUser: (datosUsuario) => {
        console.log(datosUsuario);

        return async (dispatch, getState) => {

            const res = await axios.post('http://localhost:4000/api/auth/signUp', { datosUsuario })
            console.log(res);
            dispatch({
                type: 'message', payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            });
        }

    },




    singIn: (usuarioLogeado) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', { usuarioLogeado })
            if (user.data.success) {
                console.log(user);
                localStorage.setItem('token', user.data.response.token)
                dispatch({ type: 'user', payload: user.data.response.userData })
            }
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            })
        }
    },



    signOut: (closeuser) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/auth/signout', { closeuser })
            localStorage.removeItem('token')
            dispatch({ type: 'user', payload: null })
        }

    }

}

export default UserActions 