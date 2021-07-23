const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb+srv://nkovalexceed:myst0347cl98@cluster0.1pxcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
const testRoute = require('./routes/testRoute');

app.use(require('cors')());
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});
app.use('/api/someTest', testRoute);

module.exports = app;