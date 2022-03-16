import React from 'react'
import UserActions from '../Redux/action/registroAction'
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function EntradaSesion(props) {


    const submit = (event) => {
        event.preventDefault()
        const usuarioLogeado = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "form-Signin"
        }
        props.SignIn(usuarioLogeado)
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label for=""></label>
                <input type="email" name="email" placeholder="email addres" />
            </div>
            <div>
                <label for=""></label>
                <input type="password" placeholder="password" name="password" />
            </div>
            <div>
                <button>SignIn</button>
            </div>
            <div>
                <p>Don't you have am account?</p><LinkRouter to="/signup">signUp</LinkRouter>
            </div>
        </form>
    )

}

const mapDispatchToProps = {
    SignIn: UserActions.singIn,
}
export default connect(null, mapDispatchToProps)(EntradaSesion)


