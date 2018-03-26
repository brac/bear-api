// jshint asi:true

const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

const router = express.Router()

app.use('/api', router)

app.use('/', (req, res) => {
  res.json({ mesage: "Connected to the root!" })
})

router.get('/', (req, res) => {
  res.json({ mesage: "Connected to the api!" })
})

app.listen(port)
console.log(`Server listenting on ${port}`)