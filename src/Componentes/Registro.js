import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import UserActions from '../Redux/action/registroAction';

function Registro(props) {
    const submit = (event) => {
        event.prevenDefault()

        const datosUsuario = {
            Name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            from: "form-Signup"
        }
        props.registroUser(datosUsuario)
    }


    console.log(props.message)
    alert(props.message.message)

    return (

        <form onSubmit={submit}>
            <div>
                <label for="email"></label>
                <input type="text" name="email" placeholder="Email Addres" />
            </div>
            <div>
                <label for="password"></label>
                <input type="password" name="password" placeholder="Create a Password" />
            </div>
            <div>
                <label for=""></label>
                <input type="text" name="Name" placeholder="Full Name" />
            </div>

            <div>
                <button type="submit"> Create a Account</button>
            </div>
            <div>"Do Uou have an Account? <LinkRouter to="/signup">SignIn</LinkRouter></div>
        </form>
    )
}

const mapDispatchToProps = {
    registroUser: UserActions.registroUser,
}

const mapStateToProps = (state) => {
    return {
        message: state.UseReduc.message,
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(Registro)