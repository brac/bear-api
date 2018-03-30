// jshint asi:true

const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
  res.json({ mesage: "Connected to the root! Oh yeah" })
})

module.exports = router