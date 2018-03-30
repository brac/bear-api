// jshint asi:true

const express = require('express')
const router  = express.Router()

router.use('/', (req, res, next) => {
  console.log('The api middlewear is working')
  next()
})

router.get('/', (req, res) => {
  res.json({ mesage: "Connected to the api!" })
})

module.exports = router
