import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import UserActions from '../Redux/action/registroAction';
import redirect from 'react-redux'
import FaceRegistro from './faceRegistro';


function Registro(props) {
    const paises = ["unselected", "Argentina", "Brazil", "Colombia", "Chile", "Uruguay"]

    const [selectPaises, setSelectPaises] = useState("unselected")

    function selected(event) {
        console.log(event.target.value)
        setSelectPaises(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()

        const datosUsuario = {
            Name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            from: "form-signup",
            country: selectPaises,

        }
        props.registroUser(datosUsuario)

    }


    return (<div>
        <div>
            <select onChange={selected}>

                {paises.map(pais =>

                    <option >{pais}</option>

                )}

            </select>

        </div>

        {selectPaises !== "unselected" ?
            <div>
                <h4 className="card-title mt-3 text-center">User Account</h4>
                <p className="text-center">Get started with your free account</p>

                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>

                <FaceRegistro pais={selectPaises} />


                <form onSubmit={submit}>
                    <div>
                        <label for=""></label>
                        <input type="text" name="Name" placeholder="Full Name" />
                    </div>

                    <div>
                        <label for="email"></label>
                        <input type="text" name="email" placeholder="Email Addres" />
                    </div>
                    <div>
                        <label for="password"></label>
                        <input type="password" name="password" placeholder="Create a Password" />
                    </div>

                    <div>
                        <label for="image"></label>
                        <input type="url" name="image" placeholder="image" />
                    </div>

                    <div>
                        <label for="country"></label>
                        <input type="text" name="country" placeholder="country" />
                    </div>

                    <div>
                        <button type="submit"> Create a Account</button>
                    </div>
                    <div>"Do you have an Account? <LinkRouter to="/user/signin">SignIn</LinkRouter></div>
                </form>
            </div> : <h1>choose a country</h1>}
    </div>
    )
}



const mapStateToProps = (state) => {
    return {
        message: state.UseReduc.message,
    }
}

const mapDispatchToProps = {
    registroUser: UserActions.registroUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Registro)