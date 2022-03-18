import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import UserActions from '../Redux/action/registroAction';

import FaceRegistro from './faceRegistro';
import PaisesAct from '../Redux/action/PaisAct';
import ItinerariesRedu from '../Redux/action/itinerariosAct'

function Registro(props) {
    console.log(props);
    const paises = [...props.pais]
    paises.unshift("unselected")
    const [selectPaises, setSelectPaises] = useState("unselected")

    useEffect(() => {
        props.fetchearPaises()
    }, [])

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
            image: event.target[3].value,
            country: selectPaises,
            from: "form-signup",


        }
        props.registroUser(datosUsuario)

    }



    return (<div>
        <p className="text-center">Plase Choose a country for Register</p>
        <div>

            <select onChange={selected}>

                {paises.map(pais =>

                    <option >{pais}</option>

                )}

            </select>

        </div>

        {selectPaises != "unselected" ?
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
                        <input type="text" name="image" placeholder="image" />
                    </div>

                    {/*                     <div>
                        <label for="country"></label>
                        <input type="text" name="country" placeholder="country" />
                    </div>
 */}
                    <div>
                        <button type="submit"> Create a Account</button>
                    </div>

                </form>
            </div> : <h1>choose a country</h1>}
        <div><p>Do you have an Account? </p><LinkRouter to="/user/signin"><button>SignIn</button></LinkRouter></div>
    </div>
    )
}



const mapStateToProps = (state) => {
    return {
        message: state.UseReduc.message,
        pais: state.dataReducer.pais,

    }
}

const mapDispatchToProps = {
    registroUser: UserActions.registroUser,
    fetchearPaises: PaisesAct.fetchearPaises,
}



export default connect(mapStateToProps, mapDispatchToProps)(Registro)