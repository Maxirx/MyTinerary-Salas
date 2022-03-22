const passport = require('../config/passport')
const ItinerariosControladores = require('../controladores/ItinerariosControladores')


const ItiRouter = require('express').Router()

const { consultarItinerarios, agregarItinerario, borrarItinerario, modificarItinerario, LikeDislike, consultarItinerariosPorID, consultarItinerariosPorCiudad } = ItinerariosControladores

ItiRouter.route('/itinerario')
    .get(consultarItinerarios)
    .post(agregarItinerario)

ItiRouter.route('/itinerario/:id')
    .delete(borrarItinerario)
    .put(modificarItinerario)
    .get(consultarItinerariosPorID)

ItiRouter.route('/itinerario/:city')
    .get(consultarItinerariosPorCiudad)

ItiRouter.route("/likes/:id")
    .put(passport.authenticate("jwt", { session: false }), LikeDislike)


module.exports = ItiRouter