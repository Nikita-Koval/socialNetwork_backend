const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersScheme = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("Users_base", usersScheme);
