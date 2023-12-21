const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;