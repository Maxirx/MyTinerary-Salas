
import { combineReducers } from 'redux'

import CiudadesRedu from './CiudadesRedu'
import ItinerariosRedu from './ItinerariosRedu'
/* import authReducer from '' */
import actionUser from './UseReduc'



const PrincipalReducer = combineReducers({

    CiudadesRedu,
    ItinerariosRedu,
    actionUser


})

export default PrincipalReducer
