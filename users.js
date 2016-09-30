var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/local')

var UsersSchema = new mongoose.Schema({
  id: Number,
  username: String,
  name: String,
  position: String
})

module.exports = mongoose.model('Users', UsersSchema)
