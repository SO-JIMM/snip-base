const express = require('express')
const bodyParser = require('body-parser')
const Blog = require('../mongoose/models/blogModel')
const router = new express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
  res.render('home', { title: "Home" })
})

router.get('/send-post', (req, res) => {
  res.render('send-post', {title: 'Sending A POST'})
})

router.post('/send-post', urlencodedParser, async (req, res) => {
  console.log(req.body)
  const post = new Blog({
    title: req.body.blogTitle,
    content: req.body.blogContent
  })
  try {
    await post.save()
    res.status(201).send(post)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router