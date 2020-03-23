const Color = require('../../models/color')
const router = require('express').Router()

router.post('/test', function (req, res) {
  const color = new Color({
    color: ['#000', '#fff'],
    user: 'shin',
    like: 0
  })
  color.save()
    .then((savedColor) => {
      res.send(savedColor)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

router.post('/testv', function (req, res) {
  // .skip(where).limit(add)
  Color.find({}).sort({ like: 'desc' })
    .then((savedColor) => {
      res.send(savedColor)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

router.post('/formInput', function (req, res) {
  console.log(req.body)
  const formColor = req.body.color
  const inputColor = []
  for (const prop in formColor) {
    inputColor.push(formColor[prop].value.hex)
  }

  const color = new Color({
    color: inputColor,
    user: req.body.user,
    title: req.body.title
  })
  console.log(color)
  color.save()
    .then((savedColor) => {
      res.status(200).send(200)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

module.exports = router
