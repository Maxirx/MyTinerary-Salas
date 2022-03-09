const Itinerarios = require('../models/Itinerarios')


const ItinerariosControladores = {
    consultarItinerarios: async (req, res) => {
        try {
            let itineraries = await Itinerarios.find()
            res.json({ succes: true, response: itineraries })
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    },
    agregarItinerario: async (required, response) => {

        const { itinerary, duration, price, places, city, hashtags, user } = required.body
        new Itinerarios({
            itinerary, duration, price, places, city, hashtags, user
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },

    borrarItinerario: async (required, response) => {
        const id = required.params.id

        var itinerarioEliminada

        itinerarioEliminada = await Itinerarios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },

    modificarItinerario: async (req, res) => {
        const id = req.params.id
        const itinerario = req.body

        var itinerariob
        itinerariob = await Itinerarios.findOneAndUpdate({ _id: id }, itinerario, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },

    consultarItinerariosPorID: async (require, response) => {
        const id = require.params.id
        var Itinerarios



        Itinerarios = await Itinerarios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
    consultarItinerarioePorCiudad: async (require, response) => {
        const id = require.params.id
        var Itinerarios



        Itinerarios = await Itinerarios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    }
}




module.exports = ItinerariosControladores