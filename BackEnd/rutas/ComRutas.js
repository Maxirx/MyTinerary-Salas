const comentariosControladores = require('../controladores/comentariosControladores')

const ComRouter = require('express').Router()
const passport = require("../config/passport");



const { addComment, modifyComment, deleteComment } = comentariosControladores


//PLACES ROUTES
ComRouter.route('/places/comment/:id')
    .put(passport.authenticate('jwt', { session: false }), modifyComment)
    .post(passport.authenticate('jwt', { session: false }), addComment)

ComRouter.route('/itineraries/comment/:id/:comment')
    .delete(passport.authenticate('jwt', { session: false }), deleteComment)


module.exports = ComRouter


