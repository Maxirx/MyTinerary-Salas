import * as React from 'react';


import UserActions from '../Redux/action/registroAction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Registro from './Registro';
import EntradaSesion from './entrada';
import "./barra.css"

function PagEntrada(props) {

    function CerrarSesion() {
        props.signOut(props.user.email)
    }

    return (
        <main className='pagDetalles'>

            {props.user ? <div>  <h1> Conected {props.user.Name} </h1>
                <div><button onClick={CerrarSesion}> signOut</button>
                </div></div>
                : <h1>no conection</h1>}
            <div>
                <article>
                    <h5>User Account</h5>
                    <p>Get Started with you account</p>
                    <p>OR</p>

                    <BrowserRouter>
                        <Routes>
                            <Route path="/signin" element={<Registro />} />
                            <Route path="/signup" element={<EntradaSesion />} />
                        </Routes>
                    </BrowserRouter>

                </article>
            </div>

        </main>
    )


}


const mapStateToProps = (state) => {
    return {
        user: state.useReduc.user
    }
}

const mapDispatchToProps = {
    signOut: UserActions.signOut
}

export default connect(mapDispatchToProps, mapStateToProps)(PagEntrada)