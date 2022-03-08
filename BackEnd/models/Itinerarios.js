const mongoose = require('mongoose')
const itinerariosSchema = new mongoose.Schema({


    itinerary: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
    places: { type: Array, required: true },
    city: { type: String, required: true },
    hashtags: { type: String, required: true },
    user: { type: String, required: true }

})

const Itinerarios = mongoose.model('Itinerario', itinerariosSchema)
module.exports = Itinerarios
