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
import Redirect from 'react-redux'
import Snack from './BarraAlerta'

function PagEntrada(props) {
    console.log(props);

    function CerrarSesion() {
        props.signOut(props.usuario.email)
    }

    return (
        <main className='pagDetalles'>

            {props.usuario !== null ? <div>  <h1> Conected {props.usuario.Name} from {props.usuario.form}</h1>
                <div><button onClick={CerrarSesion}> signOut</button>
                </div></div>
                : <><h1>No Conected</h1><div>
                    <article>
                        <h5>User Account</h5>
                        <p>Get Started with you account</p>

                        <FaceRegistro />
                        <p>OR</p>
                        <Registro />
                        <p>OR</p>
                        <EntradaSesion />
                    </article>
                </div></>}
            <Snack />
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