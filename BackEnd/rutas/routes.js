const ciudadesControladores = require('../controladores/ciudadesControladores')

const Router = require('express').Router()



const { consultarCiudades, agregarCiudad, borrarCiudad } = ciudadesControladores

Router.route('/todaslasciudades')
    .get(consultarCiudades)
    .post(agregarCiudad)

Router.route('/allcities/:id')
    .delete.apply(borrarCiudad)

module.exports = Router




