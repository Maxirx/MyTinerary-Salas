const ciudadesControladores = require('../controladores/ciudadesControladores')

const Router = require('express').Router()



const { consultarCiudades, agregarCiudad, borrarCiudad, modificarCiudad, consultarCiudadePorID } = ciudadesControladores

Router.route('/todaslasciudades')
    .get(consultarCiudades)
    .post(agregarCiudad)

Router.route('/todaslasciudades/:id')
    .delete(borrarCiudad)
    .put(modificarCiudad)
    .get(consultarCiudadePorID)


module.exports = Router




