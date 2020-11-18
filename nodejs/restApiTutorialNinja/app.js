const express = require('express');
const router = require('./routes/api');

// set application
const app = express();

app.use('/api', router);
app.listen(process.env.port || 4000, () => {
  console.log('now listening for request');
});
