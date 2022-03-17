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
            country: props.pais,
            image: res.picture.data.url,
            from: "facebook",

        }
        await props.singIn(usuarioLogeado)
    }

    return (
        <FacebookLogin

            textButton="Join with Facebook"
            appId="381373610174166"
            autoLoad={false}
            fields="name,email,picture"
            callback={respuestaFacebook}

        />
    )

}

const mapDispatchToProps = {
    singIn: userActions.singIn,

}

export default connect(null, mapDispatchToProps)(FaceIngreso);