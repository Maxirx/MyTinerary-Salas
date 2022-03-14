const { default: mongoose } = require("mongoose")



const UsuarioModelo = new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    emailVerifi: { type: Boolean, required: true },
    from: { tipe: Array }
})

const User = mongoose.model('users', userSchema)
module.exports = User