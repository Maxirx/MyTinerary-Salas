const User = require('../models/Usuario')
const bcryptjs = require('brcyptsjs')



const usuariosControlladores = {
    registroUsuarios: async (req, res) => {
        let { Name, email, password, from } = req.body.userData

        try {
            const UsuarioYaExiste = await User.findOne({ email })

            if (UsuarioYaExiste) {
                console.log(UsuarioYaExiste.from.indexOf(from));
                if (UsuarioYaExiste.from.indexOf(from) === 0) {
                    res.json({ success: false, from: "signup", message: "Ya has realizado tu SignUp de esta forma por favor realiza SignIn" })

                } else {
                    const constraseñaHasheada = bcryptjs.hashSync(password, 10)
                    UsuarioYaExiste.from.push(from)
                    UsuarioYaExiste.password.push(constraseñaHasheada)
                    if (from === "form-Signup") {
                        await UsuarioYaExiste.save()

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
                    emailverify: true,
                    from: [from],
                })

                if (from !== "form-Signup") {
                    await nuevoUsuario.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "User Create with " + from
                    })


                } else {

                    await nuevoUsuario.save()

                    res.json({
                        succes: true,
                        from: "singup",
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
        const { email, password, from } = req.body.entradaUsuario
        try {
            const UsuarioYaExiste = await user.findOne({ email })

            if (!UsuarioYaExiste) {
                res.json({ succes: false, message: "your are not registered, please do a sign In" })

            } else {
                if (from !== "form-SignIn") {

                    let constraseñaCorrecta = UsuarioYaExiste.password.filter(contra => bcryptjs.compareSync(password, contra))

                    if (constraseñaCorrecta.length > 0) {


                        const datosUsuario = {
                            Name: UsuarioYaExiste.Name,
                            email: UsuarioYaExiste.email,
                            from: UsuarioYaExiste.from
                        }
                        await UsuarioYaExiste.save()

                        res.json({
                            succes: true,
                            from: from,
                            response: { datosUsuario },
                            message: "welcome again" + datosUsuario.Name,

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
                        message: "please check your email"
                    })
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

}

export default usuariosControlladores