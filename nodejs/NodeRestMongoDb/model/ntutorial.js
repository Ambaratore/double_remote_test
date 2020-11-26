const mongoose = require('mongoose');
const schema = mongoose.Schema;
// create a schema
const NTutorialSchema = new schema({
  title: {
    type: String,
    required: [true, 'title field is required'],
    default: '',
    max: [70, 'title max_length is 70'],
  },
  description: {
    type: String,
    required: [true, 'description field is required'],
    default: '',
    max: [200, 'title max_length is 200'],
  },
  published: {
    type: Boolean,
    default: false,
  }
});
// create a model
const NTutorial = mongoose.model('ntutorial', NTutorialSchema);
module.exports = NTutorial;
