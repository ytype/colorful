const Color = require('../models/Color')
const Comment = require('../models/comment')
const router = require('express').Router()

router.post('/color', function (req, res) {
  const id = req.body.params.id
  if (id === 'all') { // select one
    console.log('find all')
    Color.find({}).sort({ like: 'desc' })
      .then((savedColor) => {
        res.send(savedColor)
      })
      .catch((error) => {
        res.send('ERROR')
        console.log(error)
      })
  } else {
    Color.findOne({ _id: id })
      .then((response) => {
        res.send(response)
      })
      .catch((error) => {
        res.send('ERROR')
        console.log(error)
      })
  }
})

router.post('/comment', function (req, res) {
  const email = req.body.params.email
  const id = req.body.params.id
  const content = req.body.params.content
  const comment = new Comment({
    user: email,
    content
  })
  Color.update(
    { _id: id },
    { $push: { comments: comment } }
  )
    .then((response) => {
      res.send(response)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

router.delete('/comment/:colorId/:commentId', function (req, res) {
  const id = req.params.colorId
  const commentId = req.params.commentId
  Color.update(
    { _id: id },
    { $pull: { comments: { _id: commentId } } }
  )
    .then((response) => {
      res.send(response)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

router.post('/like', function (req, res) {
  const id = req.body.params.id
  const email = req.body.params.email
  Color.update(
    { _id: id },
    { $push: { like: email } }
  )
    .then((response) => {
      res.send(response)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

router.post('/unlike', function (req, res) {
  const id = req.body.params.id
  const email = req.body.params.email
  Color.update(
    { _id: id },
    { $pull: { like: email } }
  )
    .then((response) => {
      res.send(response)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

module.exports = router
