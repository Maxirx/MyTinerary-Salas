import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../Redux/action/registroAction';

function FaceIngreso(props) {


    const respuestaFacebook = async (res) => {

        console.log(res);
        const usuarioLogeado = {
            email: res.email,
            password: res.id,
            from: "facebook",
        }
        await props.signIn(usuarioLogeado)
    }

    return (
        <FacebookLogin

            textButton="Join with Facebook"
            appId="5114428911951780"
            autoLoad={false}
            fields="name,email,picture"
            callback={respuestaFacebook}

        />
    )

}

const mapDispatchToProps = {
    signIn: userActions.signIn,

}

export default connect(null, mapDispatchToProps)(FaceIngreso);