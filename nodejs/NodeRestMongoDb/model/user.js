const mongoose = require('mongoose');

const schema = mongoose.Schema;
// create a schema
const UserSchema = new schema({
  username: {
    type: String,
    required: [true, 'username field is required'],
    max: [20, 'username max_length is 70'],
    min: [4, 'username min_length is 4'],
  },
  password: {
    type: String,
    required: [true, 'password field is required'],
    default: '',
    max: [20, 'password max_length is 20'],
    min: [4, 'password min_length is 4'],
  }

});
// create a model
const User = mongoose.model('user', UserSchema);
module.exports = User;
