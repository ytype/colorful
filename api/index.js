import router from './routes/index'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import passport from 'passport'
dotenv.config({ silent: true })

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./config/passport')(passport)

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI)
  // eslint-disable-next-line no-console
  .then(() => console.log('Successfully connected to mongodb'))
  // eslint-disable-next-line no-console
  .catch(e => console.error(e))

app.use('/', router)

module.exports = {
  path: '/api',
  handler: app
}
