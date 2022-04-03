import React from 'react'
import UserActions from '../Redux/action/registroAction'
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FaceRegistro from './faceRegistro';
import FaceIngreso from './FaceIngreso';
/* import "./barra.css" */

function EntradaSesion(props) {
    console.log(props);


    const submit = (event) => {
        event.preventDefault()

        const usuarioLogeado = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "form-signup"
        }

        props.singIn(usuarioLogeado)
    }

    return (<div/*  className='pagDetalles' */>
        <FaceIngreso />

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
                <p>Don't you have an account?</p><LinkRouter to="/user/signup">signUp</LinkRouter>
            </div>
        </form></div>
    )

}

const mapDispatchToProps = {
    singIn: UserActions.singIn,
}
export default connect(null, mapDispatchToProps)(EntradaSesion)


