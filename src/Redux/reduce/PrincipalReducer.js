
import { combineReducers } from 'redux'

import CiudadesRedu from './CiudadesRedu'
import ItinerariosRedu from './ItinerariosRedu'
/* import authReducer from '' */
import dataReducer from './PaisReducer'

import UseReduc from './UseReduc'



const PrincipalReducer = combineReducers({

    CiudadesRedu,
    ItinerariosRedu,
    UseReduc,
    dataReducer


})

export default PrincipalReducer
