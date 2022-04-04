require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./BackEnd/config/database')
const Router = require('./BackEnd/rutas/routes')
const ItiRouter = require('./BackEnd/rutas/ItiRoutes')
const UserRouter = require('./BackEnd/rutas/UserRutas')
const ActRouter = require('./BackEnd/rutas/ActRutas')
const ComRouter = require('./BackEnd/rutas/ComRutas')
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


