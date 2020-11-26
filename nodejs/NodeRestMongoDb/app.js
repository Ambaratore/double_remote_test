const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');
const routerAuth = require('./security/userController');
const basicAuth = require('./security/basic-auth');

// set app as express app
const app = express();
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use basic HTTP auth to secure the api
app.use(basicAuth);
// api routes
app.use('/users', routerAuth);
// Route
app.use('/api', router);


// mongo connection
mongoose.connect('mongodb+srv://tore:Nwjr7xITHyETuN9i@cluster0.59rkq.mongodb.net/todo?retryWrites=true&w=majority');

app.listen(process.env.port || 4000, () => {
  console.log('now listening for request');
});
