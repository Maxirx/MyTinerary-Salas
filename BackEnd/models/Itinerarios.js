const mongoose = require('mongoose')
const itinerariosSchema = new mongoose.Schema({


    itinerary: { type: String, required: true },
    nameCity: { type: String, required: true },
    imageCity: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },

    city: { type: mongoose.Types.ObjectId, ref: 'Ciudades' },
    hashtags: { type: Array, required: true },
    user: { type: String, required: true },
    photo: { type: String, required: true },
    likes: { type: Number, required: true },
    comment: { type: Array, required: true }

})

const Itinerarios = mongoose.model('itinerarios', itinerariosSchema)

module.exports = Itinerarios