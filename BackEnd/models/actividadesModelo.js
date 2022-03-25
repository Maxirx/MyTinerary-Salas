const mongoose = require('mongoose')
const activitiesSchema = new mongoose.Schema({


    activityTitle: { type: String, required: true },
    Activity: { type: String, required: true },
    nameCity: { type: String, required: true },
    nameItinerary: { type: String, required: true },
    imageCity: { type: String, required: true },
    ItineraryId: { type: mongoose.Types.ObjectId, ref: 'Itinerarios' },



})

const Activities = mongoose.model('activities', activitiesSchema)

module.exports = Activities
