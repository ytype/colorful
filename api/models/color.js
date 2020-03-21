const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Color = new Schema({
  color: Array,
  user: String,
  like: [String]
})

module.exports = mongoose.model('Color', Color)
