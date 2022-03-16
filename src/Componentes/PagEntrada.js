import * as React from 'react';

import { Link as LinkRouter } from 'react-router-dom';
import UserActions from '../Redux/action/registroAction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Registro from './Registro';
import EntradaSesion from './entrada';



function PagEntrada(props) {
    function CerrarSesion() {
        props.signOut(props.user.email)
    }

    return (
        <div>
            {props.user ? <>  <h1> Conected {props.user.Name} </h1>
                <div><button onClick={CerrarSesion}> signOut</button>
                </div></>
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

        </div>

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