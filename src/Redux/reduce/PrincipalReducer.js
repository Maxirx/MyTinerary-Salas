
import { combineReducers } from 'redux'

import CiudadesRedu from './CiudadesRedu'
import ItinerariosRedu from './ItinerariosRedu'
/* import authReducer from '' */



const PrincipalReducer = combineReducers({

    CiudadesRedu,
    ItinerariosRedu

})

export default PrincipalReducer
