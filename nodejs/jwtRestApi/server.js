const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serverConfig = require('./config');

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());

const { MONGODB } = serverConfig;
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to mongoDb');
    return app.listen(process.env.port || 4000);
  })
  .then(() => console.log('server running on port 4000'))
  .catch((err) => console.log(err.message));
