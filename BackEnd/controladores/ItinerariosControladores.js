const Itinerarios = require('../models/Itinerarios')


const ItinerarariosControladores = {
    consultarItinerarios: async (require, response) => {
        var Itinerararios
        var error = null

        try {
            Itinerarios = await Itinerararios.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { Itinerararios },
            succes: error ? false : true,
            error: error
        })

    },
    agregarItinerario: async (required, response) => {

        const { name, country, image, continent } = required.body
        new Itinerararios({
            name, country, image, continent
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },

    borrarItinerario: async (required, response) => {
        const id = required.params.id

        var itinerarioEliminada

        itinerarioEliminada = await Itinerararios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },

    modificarItinerario: async (req, res) => {
        const id = req.params.id
        const itinerario = req.body

        var itinerariob
        itinerariob = await Itinerararios.findOneAndUpdate({ _id: id }, itinerario, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },

    consultarItinerarioePorID: async (require, response) => {
        const id = require.params.id
        var Itinerarios



        Itinerarios = await Itinerararios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
    consultarItinerarioePorCiudad: async (require, response) => {
        const id = require.params.id
        var Itinerarios



        Itinerarios = await Itinerararios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    }
}




module.exports = ItinerarariosControladores