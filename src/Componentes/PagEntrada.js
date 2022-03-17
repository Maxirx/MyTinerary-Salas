import React from "react";
import UserActions from '../Redux/action/registroAction';
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Registro from './Registro';
import EntradaSesion from './entrada';
import "./barra.css"

function PagEntrada(props) {
    console.log(props);

    function CerrarSesion() {
        props.signOut(props.usuario.email)
    }

    return (
        <main className='pagDetalles'>

            {props.usuario ? <div>  <h1> Conected {props.usuario.Name} </h1>
                <div><button onClick={CerrarSesion}> signOut</button>
                </div></div>
                : <h1>no conection</h1>}
            <div>
                <article>
                    <h5>User Account</h5>
                    <p>Get Started with you account</p>
                    <p>OR</p>

                    {!props.user && <LinkRouter to={"./signup"} >Signup</LinkRouter >}
                    {!props.user && <LinkRouter to={"./signin"} >SignIn</LinkRouter >}


                </article>
            </div>

        </main>
    )


}


const mapStateToProps = (state) => {
    return {
        usuario: state.UseReduc.usuario,
    }
}

const mapDispatchToProps = {
    signOut: UserActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(PagEntrada)