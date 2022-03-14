const Router = require("express").Router()
const usuariosControlladores = require('../controladores/UsuariosControladorees')

const { registroUsuarios, entradaUsuario, signOut } = usuariosControlladores

Router.route('/auth/signUp')
    .post(registroUsuarios)

Router.route('/auth/signIn')
    .post(entradaUsuario)

Router.route('/auth/signOut')
    .post(signOut)

module.exports = Router