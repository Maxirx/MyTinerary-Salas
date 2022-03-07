
import { combineReducers } from 'redux'

import CiudadesRedu from './CiudadesRedu'
import authReducer from './authReducer'



const PrincipalReducer = combineReducers({

    CiudadesRedu,
    authReducer

})

export default PrincipalReducer
