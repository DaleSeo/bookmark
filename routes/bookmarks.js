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
    .sort('-visited -visits')
    .limit(limit)
    .then(bookmarks => res.send(bookmarks))
})

router.post('/', (req, res) => {
  let now = new Date()
  req.body.created = now
  req.body.visited = now
  req.body.visits = 1
  Bookmark.create(req.body)
    .then(_ => res.sendStatus(204))
})

router.put('/:id', (req, res) => {
  req.body.updated = new Date()
  Bookmark.findByIdAndUpdate(req.params.id, req.body)
    .then(_ => res.sendStatus(204))
})

router.patch('/:id/visit', (req, res) => {
  Bookmark.findByIdAndUpdate(req.params.id, {
    $inc: {visits: 1},
    $set: {visited: new Date()}
  }).then(_ => res.sendStatus(204))
})

module.exports = router
