
const mongoose = require('mongoose')
const ciudadesSchema = new mongoose.Schema({

    name: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    continent: { type: String, required: true }
})

const Ciudades = mongoose.model('Ciudades', ciudadesSchema)
module.exports = Ciudades
