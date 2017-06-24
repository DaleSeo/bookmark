const mongoose = require('mongoose')

module.exports = mongoose.model('Bookmark', {
  url: String,
  title: String,
  content: String,
  date: Date,
  hit: Number
})
