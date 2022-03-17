import react from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import userActions from '../Redux/action/registroAction'
import { useDispatch } from "react-redux";


function FaceRegistro(props) {

    const respuestaFace = async (res) => {
        console.log(res);
        const usuarioLogeadoFace = {
            email: res.email,
            password: res.id,
            from: "facebook",
        }
        await props.signInUser(usuarioLogeadoFace)
    }





    return (
        <FacebookLogin

            textButton="Join with Facebook"
            appId="5114428911951780"
            autoLoad={false}
            fields="name,email,picture"
            callback={respuestaFace}

        />
    );
}
const mapDispatchToProps = {
    signInUser: userActions.signInUser,

}


export default connect(null, mapDispatchToProps)(FaceRegistro);