// jshint asi:true

const express = require('express')
const router  = express.Router()
const queries = require('../database/queries')

// router.use('/', (req, res, next) => {
//   console.log('The api middlewear is working')
//   next()
// })

router.get('/', (req, res) => {
  res.json({ mesage: 'Connected to the api!' })
})

router.get('/bears', (req, res) => {
  queries.list().then( results => {
    res.json({ results })
  })
})

router.get('/bears/:id', (req, res) => {
  queries.listSingle(req.params.id).then( result => {
    if (result == undefined) { return res.json({ message: `No bear at that id: ${req.params.id}` })
    } else {
      res.json({ Bear: result.name })
    }
  })
})

router.post('/bears', (req, res) => {
  queries.create(req.body.name).then(result => {
    res.json({message: `Bear added: ${result.name}`})
  })
})




module.exports = router
