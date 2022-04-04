
const mongoose = require('mongoose')

const ModeloUsuario = new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    uniqueString: { type: String, required: true },
    emailVerify: { type: Boolean, required: true },
    image: { type: String },
    country: { type: String },
    from: { type: Array },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

const User = mongoose.model('users', ModeloUsuario)
module.exports = User