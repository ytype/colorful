import express from 'express'
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

router.get('/', function (req, res) {
  res.send('HELLO WORLD')
})

router.post('/register', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body)
  User.findOne({ email: req.body.email })
    .then((user) => {
      res.send(user)
      if (user) {
        return res.status(400).json({
          email: '해당 이메일을 가진 사용자가 존재합니다.'
        })
      } else {
        // eslint-disable-next-line no-console
        console.log('create user')
        const newUser = new User({
          email: req.body.email,
          name: req.body.name,
          password: req.body.password
        })

        bcrypt.genSalt(10, (_err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) { throw err }

            newUser.password = hash

            newUser.save()
              .then(user => res.json(user))
              // eslint-disable-next-line no-console
              .catch(err => console.log(err))
          })
        })
      }
    })
})

export default router
