var mongoose = require('mongoose')
var TodoSchema = new mongoose.Schema({
  content: String,
  time: { type: Date, default: Date.now },
})
module.exports = mongoose.model('Todo', TodoSchema)
