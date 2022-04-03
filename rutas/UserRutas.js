const UserRouter = require("express").Router()
const passport = require("../config/passport");
const usuariosControlladores = require('../controladores/UsuariosControladorees');
const Validador = require('../config/Validador')

const { registroUsuarios, entradaUsuario, signOut, verificarEmail, verificarToken, modificarContraseña } = usuariosControlladores

UserRouter.route('/auth/signUp')
    .post(registroUsuarios, Validador)

UserRouter.route('/auth/signIn')
    .post(entradaUsuario)

UserRouter.route('/auth/signOut')
    .post(signOut)

UserRouter.route('/verify/:uniqueString')
    .get(verificarEmail)

UserRouter.route('/auth/signInToken')
    .get(passport.authenticate('jwt', { session: false }), verificarToken)

UserRouter.route('/auth/cambiarContraseña')
    .get(passport.authenticate('jwt', { session: false }), modificarContraseña)

module.exports = UserRouter




