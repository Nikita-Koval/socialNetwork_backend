const mongoose = require("mongoose");

const { Schema } = mongoose;

const mapScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

module.exports = GoogleMap = mongoose.model("map_marks", mapScheme);