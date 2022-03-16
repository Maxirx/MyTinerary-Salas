const joi = require('joi')

const Validador = (req, res, next) => {
    const schema = joi.object({
        Name: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z')).required().messages({
            'string.min': 'fullName / The name must have more than 3 characters',
            'string.max': "fullName / the name must have less than 20 characters"
        }),
        email: joi.string().email({ maonDomainSegments: 2 }).required().messages({
            'string.email': 'Formato incorrecto de email'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(10).message({
            'string.min': 'password must have a minium 8 characters and contain mayus, minus and number',
            'string.pattern': "password must be alphanumeric and must contain a number"
        }),

        from: joi.string()


    })

    const Validacion = schema.validate(req.body.datosUsuario, { abortEarly: false })

    if (Validacion.error) {

        return res.json({ succes: false, from: "validator", message: Validacion.error.details })

    }

    next()

}

module.exports = Validador