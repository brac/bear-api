// jshint asi:true

/* Depenencies */
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const router     = express.Router()
const client     = require('./database/client')
const mainRoutes = require('./routes')
const apiRoutes  = require('./routes/api.js')

/* body-Parser configs */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/* Port */
const port = process.env.PORT || 3000

app.use(mainRoutes)
app.use('/api', apiRoutes)

/* Start the srever */
app.listen(port)
console.log(`Server listenting on ${port}`)