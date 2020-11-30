const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [emailValidator, 'email format error'],
  },
  password: {
    type: String,
    required: true,
  },
});

function emailValidator(value) {
  return '/^.'
}
