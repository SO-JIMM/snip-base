const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
  res.render('home', { title: "Home" })
})

router.post('/send-post', urlencodedParser, (req, res) => {
  console.log(req.body)
})

module.exports = router