require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./config/database')
const Router = require('./rutas/routes')
const ItiRouter = require('./rutas/ItiRoutes')
const PORT = 4000


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', Router)
app.use('/api', ItiRouter)

app.listen(PORT, () => console.log('Server ready on PORT' + PORT))


