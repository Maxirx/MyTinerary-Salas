const ciudadesControladores = require('../controladores/ciudadesControladores')
/* const ItinerariosControladores = require('../controladores/ItinerariosControladores') */

const Router = require('express').Router()



const { consultarCiudades, agregarCiudad, borrarCiudad, modificarCiudad, consultarCiudadePorID } = ciudadesControladores

/* const { consultarItinerarios, agregarItinerario, borrarItinerario, modificarItinerario, consultarItinerariosPorID } = ItinerariosControladores */

Router.route('/todaslasciudades')
    .get(consultarCiudades)
    .post(agregarCiudad)

Router.route('/todaslasciudades/:id')
    .delete(borrarCiudad)
    .put(modificarCiudad)
    .get(consultarCiudadePorID)
/* 
Router.route('/itinerario')
    .get(consultarItinerarios)
    .post(agregarItinerario)

Router.route('/itinerario/:id')
    .delete(borrarItinerario)
    .put(modificarItinerario)
    .get(consultarItinerariosPorID) */


module.exports = Router





