const passport = require("passport");
const User = require("../models/Usuario");
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt






module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, (jwt_payload, done) => {
    /*    console.log(jwt_payload); */
    User.findOne({ _id: jwt_payload.id })

        .then(usuario => {

            /*     console.log(usuario); */
            if (usuario) {
                return done(null, usuario)
            } else if (err) {
                console.log(err);
                return done(err, false)
            }
            else {
                return done(null, false)
            }
        })
        .catch(err => {
            console.log(err);
            return done(err, false)
        }
        )
}

)

)