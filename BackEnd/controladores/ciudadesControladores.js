const Ciudades = require('../models/ciudades')


const ciudadesControladores = {
    consultarCiudades: async (require, response) => {
        var ciudades
        var error = null

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

        const { name, country, image, continent } = required.body
        new Ciudades({
            name, country, image, continent
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },

    borrarCiudad: async (required, response) => {
        const id = required.params.id

        var ciudadEliminada

        ciudadEliminada = await Ciudades.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },

    modificarCiudad: async (req, res) => {
        const id = req.params.id
        const ciudad = req.body

        var ciudadb
        ciudadb = await Ciudades.findOneAndUpdate({ _id: id }, ciudad, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },

    consultarCiudadePorID: async (require, response) => {
        const id = require.params.id
        var ciudades



        ciudades = await Ciudades.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    }
}




module.exports = ciudadesControladores