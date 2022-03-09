const mongoose = require('mongoose')
const itinerariosSchema = new mongoose.Schema({


    itinerary: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    places: { type: Array, required: true },
    city: { type: mongoose.Types.ObjectId, ref: 'Ciudades' },
    hashtags: { type: Array, required: true },
    user: { type: String, required: true }

})

const Itinerarios = mongoose.model('Itinerario', itinerariosSchema)
module.exports = Itinerarios
