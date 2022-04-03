
import { combineReducers } from 'redux'

import CiudadesRedu from './CiudadesRedu'
import ItinerariosRedu from './ItinerariosRedu'
/* import authReducer from '' */
import dataReducer from './PaisReducer'

import UseReduc from './UseReduc'

import activitiesReducers from './activitiesReducer'



const PrincipalReducer = combineReducers({

    CiudadesRedu,
    ItinerariosRedu,
    UseReduc,
    dataReducer,
    activitiesReducers


})

export default PrincipalReducer
