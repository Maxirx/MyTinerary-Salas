const ciudadesControladores = require('../controladores/ciudadesControladores')

const Router = require('express').Router()



const { consultarCiudades } = ciudadesControladores

Router.route('/todaslasciudades')
    .get(consultarCiudades)
/*  .post(cargarCiudad)
*/
module.exports = Router


