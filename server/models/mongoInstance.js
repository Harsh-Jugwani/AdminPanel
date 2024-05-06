const mongoose = require('mongoose');

const mongoInstanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    required: true,
  },
  // Add other necessary fields
});

const MongoInstance = mongoose.model('MongoInstance', mongoInstanceSchema);

module.exports = MongoInstance;