const mongoose = require('mongoose');

const databaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MongoInstance',
    required: true,
  },
  
});

const Database = mongoose.model('Database', databaseSchema);

module.exports = Database;