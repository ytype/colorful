const Color = require('../../models/Color')
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
  Color.find({})
    .then((savedColor) => {
      res.send(savedColor)
    })
    .catch((error) => {
      res.send('ERROR')
      console.log(error)
    })
})

router.post('/formInput', function (req, res) {
  const formColor = req.body.color
  const color = []
  for (const prop in formColor) {
    color.push(formColor[prop].value)
  }
  console.log(color)
})

module.exports = router
