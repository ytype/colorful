const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  user: String,
  content: String,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Comment', Comment)
