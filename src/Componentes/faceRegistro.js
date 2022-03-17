import react from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import userActions from '../Redux/action/registroAction'
import { useDispatch } from "react-redux";


function FaceRegistro(props) {

    const respuestaFace = async (res) => {
        console.log(res);
        const usuarioLogeado = {
            Name: res.name,
            email: res.email,
            password: res.id,
            country: props.pais,
            image: res.picture.data.url,
            from: "facebook",
        }

        await props.registroUser(usuarioLogeado)
        console.table(usuarioLogeado);
    }





    return (
        <FacebookLogin

            textButton="Join with Facebook"
            appId="381373610174166"
            autoLoad={false}
            fields="name,email,picture"
            callback={respuestaFace}

        />
    );
}
const mapDispatchToProps = {
    registroUser: userActions.registroUser,

}


export default connect(null, mapDispatchToProps)(FaceRegistro);