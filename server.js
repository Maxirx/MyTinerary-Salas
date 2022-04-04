require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./config/database')
const Router = require('./rutas/routes')
const ItiRouter = require('./rutas/ItiRoutes')
const UserRouter = require('./rutas/UserRutas')
const ActRouter = require('./rutas/ActRutas')
const ComRouter = require('./rutas/ComRutas')
const PORT = 4000


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', Router)
app.use('/api', ItiRouter)
app.use('/api', UserRouter)
app.use('/api', ActRouter)
app.use('/api', ComRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {

        res.sendFile(path.join(_dirname + '/client/bluid/index.html'))
    })
}

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`Server ready on PORT ${process.env.PORT || 4000}`))


