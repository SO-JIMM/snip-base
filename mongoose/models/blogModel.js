const mongoose = require('mongoose')
const userSchema = require('../schemas/blogSchema');

const Blog = mongoose.model('Blog', userSchema)

module.exports = Blog
