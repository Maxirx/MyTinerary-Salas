const Ciudades = require('../models/ciudades')


const ciudadesControladores = {
    consultarCiudades: async (require, response) => {
        let ciudades
        let error = null

        try {
            ciudades = await Ciudades.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { ciudades },
            succes: error ? false : true,
            error: error
        })

    },
    /*     modificarCiudad: async (required, modId) => {
            console.log(required.body);
        } */
}






module.exports = ciudadesControladores