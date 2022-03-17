const UserRouter = require("express").Router()
const passport = require("../config/passport");
const usuariosControlladores = require('../controladores/UsuariosControladorees');

const { registroUsuarios, entradaUsuario, signOut, verificarEmail, verificarToken } = usuariosControlladores

UserRouter.route('/auth/signUp')
    .post(registroUsuarios)

UserRouter.route('/auth/signIn')
    .post(entradaUsuario)

UserRouter.route('/auth/signOut')
    .post(signOut)

UserRouter.route('/verify/:uniqueString')
    .get(verificarEmail)

UserRouter.route('/auth/signInToken')
    .get(passport.authenticate('jwt', { session: false }), verificarToken)

module.exports = UserRouter




