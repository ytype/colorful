import mongoose from 'mongoose'
const Schema = mongoose.Schema

const colorSchema = new Schema({
  no: Number,
  author: String,
  color: { type: Array, 'default': [] },
  like: { type: Array, 'default': [] }
})

colorSchema.methods.likelen = function (_no) {
  return colorSchema.aggregate([{ $match: { no: _no } }, { $project: { like: { $size: '$like' } } }])
}

export default mongoose.model('color', colorSchema)
