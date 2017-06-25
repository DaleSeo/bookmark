const router = require('express').Router()
const Bookmark = require('../models/Bookmark')

router.get('/', (req, res) => {
  let regex = new RegExp(req.query.keyword || '')
  let limit = +req.query.size || 20
  Bookmark.find()
  .or([
    {title: regex},
    {url: regex},
    {description: regex}
  ])
  .sort('-hit')
  .limit(limit)
  .then(bookmarks => res.send(bookmarks))
})

module.exports = router
