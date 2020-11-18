const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, (req, res) => {
  if (req.body != null) {
    console.log(req.body);
  }
  res.render('contact-success', { body: req.body });
});

app.get('/profile/:name', (req, res) => {
  const data = {
    name: req.params.name,
    age: 32,
    job: 'developer',
    hobbies: ['football', 'art', 'trekking'],
  };
  res.render('profile', { person: data });
});
