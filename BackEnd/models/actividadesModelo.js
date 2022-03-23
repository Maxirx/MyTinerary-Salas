const mongoose = require('mongoose')
const itinerariosSchema = new mongoose.Schema({


    activity: { type: String, required: true },
    nameCity: { type: String, required: true },
    nameItinerary: { type: String, required: true },
    imageCity: { type: String, required: true },
    ItineraryId: { type: mongoose.Types.ObjectId, ref: 'Itinerarios' },



})

const Activities = mongoose.model('itinerarios', activitiesSchema)

module.exports = Activities
