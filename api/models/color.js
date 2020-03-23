// const Comment = require('./comment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  user: String,
  content: String,
  date: { type: Date, default: Date.now }
})

const Color = new Schema({
  color: Array,
  user: String,
  title: String,
  like: [String],
  date: { type: Date, default: Date.now },
  comments: [Comment]
})

module.exports = mongoose.model('Color', Color)
