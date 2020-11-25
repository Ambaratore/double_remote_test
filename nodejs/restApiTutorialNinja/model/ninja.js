const mongoose = require('mongoose');

const schema = mongoose.Schema;

// NinjaGeometrySchema
const geoSchema = new schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

// NinjaSchema
const ninjaSchema = new schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    required: false,
  },
  // geo pos info
  location: geoSchema,
});
const Ninja = mongoose.model('ninja', ninjaSchema);
module.exports = Ninja;
