const ciudadesControladores = require('../controladores/ciudadesControladores')

const Router = require('express').Router()



const { consultarCiudades, agregarCiudad, borrarCiudad, modificarCiudad } = ciudadesControladores

Router.route('/todaslasciudades')
    .get(consultarCiudades)
    .post(agregarCiudad)

Router.route('/todaslasciudades/:id')
    .delete(borrarCiudad)
    .put(modificarCiudad)


module.exports = Router




