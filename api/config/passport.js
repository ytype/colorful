import dotenv from 'dotenv'
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
dotenv.config({ silent: true })
const mongoose = require('mongoose')
const User = mongoose.model('users')

const keys = process.env.SECRET_KEY

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys

module.exports = (passport) => {
  // eslint-disable-next-line camelcase
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then((user) => {
        if (user) {
          return done(null, user)
        }
        return done(null, false)
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }))
}
