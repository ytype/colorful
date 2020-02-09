import Color from '../model/color'
import express from 'express'
const router = express.Router()

router.get('/', function (req, res) {
  res.send('HELLO WORLD')
})

router.post('/color', function (req, res) {
  const data = {
    color: []
  }
  const len = req.body.color.length
  for (let i = 0; i < len; i++) {
    data.color.push(data.color[i].value)
  }
  // eslint-disable-next-line no-console
  console.log(req.body.color)
  // eslint-disable-next-line no-console
  console.log(data)
  // eslint-disable-next-line no-console
  /*
  Color.create(req.body.color)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
              err.message || 'Some error occurred while creating.'
      })
    })
  */
})

export default router
