const ActividadesControladores = require('../controladores/actividadesControladores')

const ActRouter = require('express').Router()



const { consultarActividades, agregarActividad, borrarActividad, modificarActividad, consultarActividadPorID, consultarActividadPorItinerario } = ActividadesControladores


ActRouter.route('/todaslasactividades')
    .get(consultarActividades)
    .post(agregarActividad)

ActRouter.route('/todaslasactividades/:id')
    .delete(borrarActividad)
    .put(modificarActividad)
    .get(consultarActividadPorID)


ActRouter.route('/actividadesporitinerario/:id')
    .get(consultarActividadPorItinerario)

module.exports = ActRouter





