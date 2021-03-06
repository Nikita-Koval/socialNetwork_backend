const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const loginRoute = require("./routes/auth/login");
const registrationRoute = require("./routes/auth/registration");
const mapRoute = require("./routes/map/map");
const userRoute = require("./routes/users/getUserInfo");

require('dotenv').config();

const app = express();

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

const url = process.env.DB_CONN;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use("/api/auth", loginRoute);
app.use("/api/auth", registrationRoute);
app.use("/api/map", mapRoute);
app.use("/api/user", userRoute);

module.exports = app;
