const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  age: Number,
})

module.exports = mongoose.model('User', UserSchema)
