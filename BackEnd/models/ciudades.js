const { Description } = require('@mui/icons-material')
const mongose = require('mongose')
const ciudadesSchema = new mongose.schema({

    nombre: { type: String, required: true },
    pais: { type: String, required: true },
    description: { type: String, required: true }
})

const Ciudades = new mongose.model('ciudades', ciudadesSchema)
module.exports = Ciudades