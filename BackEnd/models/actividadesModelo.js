const mongoose = require('mongoose')
const activitiesSchema = new mongoose.Schema({


    activityTitle: { type: String, required: true },
    activity: { type: String, required: true },
    nameCity: { type: String },
    nameItinerary: { type: String },
    imageCity: { type: String },
    ItineraryId: { type: mongoose.Schema.Types.ObjectId, ref: 'itinerarios' },



})

const Activities = mongoose.model('activities', activitiesSchema)

module.exports = Activities
