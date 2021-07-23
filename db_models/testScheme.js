const mongoose = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema({
  name: String,
  password: String,
});

module.exports = Test = mongoose.model('test', testSchema);