const mongoose = require('mongoose')

module.exports = mongoose.model('Bookmark', {
  url: String,
  title: String,
  description: String,
  date: Date,
  hit: Number
})
