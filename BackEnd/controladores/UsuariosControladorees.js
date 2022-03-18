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
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
      <style type="text/css">
        table, td { color: #000000; } a { color: #ffffff; text-decoration: none; } @media (max-width: 480px) { #u_content_text_2 .v-text-align { text-align: center !important; } }
  @media only screen and (min-width: 570px) {
    .u-row {
      width: 550px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-100 {
      width: 550px !important;
    }
  }
  
  @media (max-width: 570px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: calc(100% - 40px) !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  table, tr, td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  @media (max-width: 480px) {
    .hide-mobile {
      max-height: 0px;
      overflow: hidden;
      display: none !important;
    }
  }
      </style>
  
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css">
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> 
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #18181b;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-image: url(cid:logo-back);background-repeat: repeat;background-position: center top;background-color: transparent;">
  
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
    <div style="width: 100% !important;">
      <div style="padding: 0px;border-top: 8px solid #000000;border-left: 8px solid #000000;border-right: 8px solid #000000;border-bottom: 0px solid transparent;">
    
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
        
        <img align="center" border="0" src='cid:logo-white' alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 18%;max-width: 99px;" width="99"/>
        
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #18181b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 100%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 100%; text-align: center; font-size: 14px;"><span style="font-size: 38px; line-height: 38px;">Bienvenido</span></p>
  <p style="line-height: 100%; text-align: center; font-size: 14px;"><span style="font-size: 38px; line-height: 38px;"><span style="line-height: 38px; font-size: 38px;">${usuario.nombre} </span><span style="line-height: 38px; font-size: 38px;">a </span></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #e11d48; line-height: 100%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 100%; text-align: center; font-size: 14px;"><span style="font-size: 44px; line-height: 44px;"><span style="line-height: 44px; font-size: 44px;"><strong> Universidad Autodidacta</strong></span></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #fc5656;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 36px; line-height: 50.4px;"><strong><span style="line-height: 50.4px; font-size: 36px;">&iquest;Estas listo para comenzar a estudiar?</span></strong></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:18px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #fc5656;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;">Haz clic en el bot&oacute;n de abajo para verificar tu correo:</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
          
  <div class="v-text-align" align="center">
      <a href="http://localhost:4000/api/verify/${uniqueString}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e11d48; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
        <span style="display:block;padding:10px 70px;line-height:190%;"><span style="font-size: 16px; line-height: 30.4px;"><strong><span style="line-height: 30.4px; font-size: 16px;">VERIFICA TU CORREO</span></strong></span></span>
      </a>
  </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table class="hide-mobile" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:56px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #18181b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Montserrat',sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="0%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #18181b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 17px 20px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%; text-align: left;">*Si usted no se ha registrado, ignore este correo</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #000000;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
    <div style="width: 100% !important;">
      <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
    
  <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:40px;font-family:'Montserrat',sans-serif;" align="left">
          
    <div class="v-text-align" style="color: #828388; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 19.6px;">&copy; UA.&nbsp; Todos los derechos reservados </span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    </div>
    </div>
  </div>
  
      </div>
    </div>
  </div>
  
      </td>
    </tr>
    </tbody>
    </table>
  </body>
  </html>`

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
        let { Name, email, password, image, country, from } = req.body.datosUsuario


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
                    image,
                    country,
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
            /*             console.log(UsuarioYaExiste.from)
                        console.log(from);
                        const passwordIndex = UsuarioYaExiste.from.indexOf(from)
                        console.log(UsuarioYaExiste.password[passwordIndex]); */


            if (!UsuarioYaExiste) {
                res.json({ success: false, message: "your are not registered, please do a sign In" })

            } else {
                if (from !== "form-signup") {

                    let constraseñaCorrecta = UsuarioYaExiste.password.filter(contra => bcryptjs.compareSync(password, contra))
                    console.log(constraseñaCorrecta);
                    if (constraseñaCorrecta.length > 0) {


                        const datosUsuario = {
                            id: UsuarioYaExiste._id,
                            Name: UsuarioYaExiste.Name,
                            email: UsuarioYaExiste.email,
                            country: UsuarioYaExiste.country,
                            image: UsuarioYaExiste.country,
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
                    image: req.user.image,
                    country: req.user.country,
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