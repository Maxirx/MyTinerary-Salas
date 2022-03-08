const ItinerariosControladores = require('../controladores/ItinerariosControladores')

const ItiRouter = require('express').Router()

const { consultarItinerarios, agregarItinerario, borrarItinerario, modificarItinerario, consultarItinerariosPorID } = ItinerariosControladores

ItiRouter.route('/itinerario')
    .get(consultarItinerarios)
    .post(agregarItinerario)

ItiRouter.route('/itinerario/:id')
    .delete(borrarItinerario)
    .put(modificarItinerario)
    .get(consultarItinerariosPorID)


module.exports = ItiRouter