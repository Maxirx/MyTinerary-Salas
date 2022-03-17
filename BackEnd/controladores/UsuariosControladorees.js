const User = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')





const enviarEmail = async (email, uniqueString) => {

    const transportador = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "proyectMyTinerary@gmail.com",
            pass: "MyTinerary1235"
        }
    })

    var sender = "proyectMyTinerary@gmail.com"
    var mailOptions = {
        from: sender,
        to: email,
        subject: "Email ",
        html: `
        <Section>
    <h1>Welcome to MyTinerary</h1>
    <p><a href=http://localhost:4000/api/verify/${uniqueString}>Do a Push</a></p>
</Section>
        `

    };
    await transportador.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mail Sent");
        }
    })
}



const usuariosControlladores = {


    verificarEmail: async (req, res) => {

        const { uniqueString } = req.params;

        const usuarioEmail = await User.findOne({ uniqueString: uniqueString })
        console.log(usuarioEmail);
        if (usuarioEmail) {
            usuarioEmail.emailVerify = true
            await usuarioEmail.save()
            res.redirect("http://localhost:3000")


        } else {
            res.json({ succes: false, response: "your email has not able to verify" })
        }

    },

    registroUsuarios: async (req, res) => {
        let { Name, email, password, from } = req.body.datosUsuario


        try {
            const UsuarioYaExiste = await User.findOne({ email })

            if (UsuarioYaExiste) {
                console.log(UsuarioYaExiste.from.indexOf(from))
                if (UsuarioYaExiste.from.indexOf(from) === 0) {
                    res.json({ success: false, from: "signup", message: "User already existent, please do signIn" })

                } else {
                    /*                     const constraseñaHasheada = bcryptjs.hashSync(password, 10)
                    
                                        UsuarioYaExiste.from.push(from) */
                    UsuarioYaExiste.password.push(constraseñaHasheada)
                    if (from === "form-signup") {
                        UsuarioYaExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await UsuarioYaExiste.save()
                        await enviarEmail(email, UsuarioYaExiste.uniqueString)

                        res.json({
                            success: true,
                            from: "signup",
                            message: "Please, check your email"
                        })
                    } else {
                        UsuarioYaExiste.save()

                        res.json({
                            succes: true,
                            from: "signup",
                            message: "We add " + from + " as a alternative for do a signIn"
                        })
                    }
                }
            } else {

                const constraseñaHasheada = bcryptjs.hashSync(password, 10)

                const nuevoUsuario = await new User({
                    Name,
                    email,
                    password: [constraseñaHasheada],
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    emailVerify: false,
                    from: [from],
                })

                if (from !== "form-signup") {
                    await nuevoUsuario.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "User Create with " + from
                    })


                } else {

                    await nuevoUsuario.save()
                    await enviarEmail(email, nuevoUsuario.uniqueString)

                    res.json({
                        succes: true,
                        from: "signup",
                        message: "check your email"
                    })

                }
            }
        } catch (error) {
            console.log(error);
            res.json({
                succes: false,
                messsage: "please, try again in feww minutes"
            })
        }


    },

    entradaUsuario: async (req, res) => {
        const { email, password, from } = req.body.usuarioLogeado
        console.log(req.body);
        try {
            const UsuarioYaExiste = await User.findOne({ email })
            //Alternativa para recuperar Password
            console.log(UsuarioYaExiste.from)
            console.log(from);
            const passwordIndex = UsuarioYaExiste.from.indexOf(from)
            console.log(UsuarioYaExiste.password[passwordIndex]);


            if (!UsuarioYaExiste) {
                res.json({ succes: false, message: "your are not registered, please do a sign In" })

            } else {
                if (from !== "form-signup") {

                    let constraseñaCorrecta = UsuarioYaExiste.password.filter(contra => bcryptjs.compareSync(password, contra))
                    console.log(constraseñaCorrecta);
                    if (constraseñaCorrecta.length > 0) {


                        const datosUsuario = {
                            id: UsuarioYaExiste._id,
                            Name: UsuarioYaExiste.Name,
                            email: UsuarioYaExiste.email,
                            from: UsuarioYaExiste.from
                        }
                        await UsuarioYaExiste.save()

                        const token = jwt.sign({ ...datosUsuario }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })

                        res.json({
                            succes: true,
                            from: from,
                            response: { token, datosUsuario },
                            message: "welcome again" + datosUsuario.Name,

                        })
                        res.redirect("http://localhost:3000")

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "No has realizado el registro con " + from + "si quieres ingresar con este metodo debes hacer el signUp con " + from
                        })
                    }
                } else {
                    if (UsuarioYaExiste.emailVerify) {
                        let contraseñaCoincide = UsuarioYaExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                        console.log(contraseñaCoincide)
                        console.log("resultado de busqueda de contrasela: " + (contraseñaCoincide.length > 0))
                        if (contraseñaCoincide.length > 0) {
                            const userData = {
                                Name: UsuarioYaExiste.Name,
                                email: UsuarioYaExiste.email,
                                from: UsuarioYaExiste.from
                            }

                            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })
                            res.json({
                                success: true,
                                from: from,
                                response: { token, userData },
                                message: "Bienvenido nuevamente " + userData.Name,
                            })

                        } else {
                            res.json({
                                succes: false,
                                from: from,
                                message: "User or password are incorrect"
                            })
                        }
                    } else {
                        res.json({
                            succes: false,
                            from: from,
                            message: "please check your email and push in the Mail"
                        })
                    }
                }
            }
        } catch (error) {
            console.log(error);
            res.json({
                succes: false,
                message: "please try again in few minutes"
            })
        }


    },



    signOut: async (req, res) => {

        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('close session ' + email))

    },

    verificarToken: (req, res) => {
        console.log(req.user);
        if (req.err) {
            res.json({
                succes: true,
                response: {
                    id: req.user.id,
                    Name: req.user.name,
                    email: req.user.email,
                    from: "token",

                },
                message: "welcome again " + req.user.Name
            })

        } else {
            res.json({
                succes: false,
                message: "Please login again"
            })
        }
    }

}

module.exports = usuariosControlladores