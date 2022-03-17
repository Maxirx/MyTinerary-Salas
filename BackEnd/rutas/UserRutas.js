const UserRouter = require("express").Router()
const usuariosControlladores = require('../controladores/UsuariosControladorees');

const { registroUsuarios, entradaUsuario, signOut, verificarEmail } = usuariosControlladores

UserRouter.route('/auth/signUp')
    .post(registroUsuarios)

UserRouter.route('/auth/signIn')
    .post(entradaUsuario)

UserRouter.route('/auth/signOut')
    .post(signOut)

UserRouter.route('/verify/:uniqueString')
    .get(verificarEmail)

module.exports = UserRouter




