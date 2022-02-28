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
    agregarCiudad: async (required, response) => {
        console.log(required.body);
        const { ciudad, pais, imagen } = required.body.Input
        new Ciudades({
            name: ciudad,
            country: pais,
            continent: continente
        }).save()
            .tehn((respuesta) => response.json({ respuesta }))
    },

    borrarCiudad: async (required, response) => {
        const id = required.params.id
        console.log(required.params)

        await Ciudades.findOneAndDelete({ _id: id })
    }
}








module.exports = ciudadesControladores