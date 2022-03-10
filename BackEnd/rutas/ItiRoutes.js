const ItinerariosControladores = require('../controladores/ItinerariosControladores')

const ItiRouter = require('express').Router()

const { consultarItinerarios, agregarItinerario, borrarItinerario, modificarItinerario, consultarItinerariosPorID, consultarItinerarioePorCiudad } = ItinerariosControladores

ItiRouter.route('/itinerario')
    .get(consultarItinerarios)
    .post(agregarItinerario)

ItiRouter.route('/itinerario/:id')
    .delete(borrarItinerario)
    .put(modificarItinerario)
    .get(consultarItinerariosPorID)

ItiRouter.route('/itinerario/:city')
    .get(consultarItinerarioePorCiudad)


module.exports = ItiRouter