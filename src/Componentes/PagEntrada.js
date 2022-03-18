import React from "react";
import UserActions from '../Redux/action/registroAction';
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Registro from './Registro';
import EntradaSesion from './entrada';
import "./barra.css"
import FaceRegistro from "./faceRegistro";
import { FacebookLogin } from "react-facebook-login";
import FaceIngreso from "./FaceIngreso";



function PagEntrada(props) {
    console.log(props);

    function CerrarSesion() {
        props.signOut(props.usuario.email)
    }

    return (
        <main className='pagDetalles'>

            {props.usuario !== null ? <div>  <h1> Conected {props.usuario.Name} from {props.usuario.from[0]}</h1>
                <div><button onClick={CerrarSesion}> signOut</button>
                </div></div>
                : <><h1>No Conected</h1><div>
                    <article>
                        <h5>User Account</h5>
                        <p>Get Started with you account</p>


                        <Registro />
                        <p>OR</p>
                        <EntradaSesion />
                    </article>
                </div></>}

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