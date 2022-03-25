const comentariosControladores = require('../controladores/comentariosControladores')

const ComRouter = require('express').Router()



const { addComment, modifiComment, deleteComment } = comentariosControladores


//PLACES ROUTES
Router.route('/places/comment')
    .post(passport.authenticate('jwt', { session: false }), addComment)
    .put(passport.authenticate('jwt', { session: false }), modifiComment)
    .delete(passport.authenticate('jwt', { session: false }), deleteComment)


module.exports = ComRouter


