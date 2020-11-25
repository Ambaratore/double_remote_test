const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');

// set application
const app = express();
mongoose.connect('mongodb+srv://tore:Nwjr7xITHyETuN9i@cluster0.59rkq.mongodb.net/todo?retryWrites=true&w=majority');

// middleware
app.use(bodyParser.json());
app.use('/api', router);

// error handling middleware with next
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.send(err.message);
// });

app.listen(process.env.port || 4000, () => {
  console.log('now listening for request');
});
