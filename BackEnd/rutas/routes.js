const ciudadesControladores = require('../controladores/ciudadesControladores')
const ItinerarariosControladores = require('../controladores/ItinerariosControladores')

const Router = require('express').Router()



const { consultarCiudades, agregarCiudad, borrarCiudad, modificarCiudad, consultarCiudadePorID } = ciudadesControladores

const { consultarItinerarios, agregarItinerario, borrarItinerario, modificarItinerario, consultarItinerarioePorID } = ItinerarariosControladores

Router.route('/todaslasciudades')
    .get(consultarCiudades)
    .post(agregarCiudad)

Router.route('/todaslasciudades/:id')
    .delete(borrarCiudad)
    .put(modificarCiudad)
    .get(consultarCiudadePorID)

Router.route('/itinerario')
    .get(consultarItinerarios)
    .post(agregarItinerario)

Router.route('/itinerario/:id')
    .delete(borrarItinerario)
    .put(modificarItinerario)
    .get(consultarItinerarioePorID)


module.exports = Router





