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


app.listen(PORT, () => console.log('Server ready on PORT' + PORT))

