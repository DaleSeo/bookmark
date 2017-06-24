const moment = require('moment')
const mongoose = require('mongoose')
const Bookmark = require('./models/Bookmark')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

Bookmark.find({})
  .then(bookmarks =>
    Promise.all(
      bookmarks
        .map(bookmark => {
          let date = moment(bookmark.date).toDate()
          bookmark.date = date
          return new Bookmark(bookmark).save()
        })
    )
  )
  .then(res => console.log('Completed!', res))
  .catch(err => console.error(err))
  .then(_ => mongoose.disconnect())
