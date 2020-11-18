const express = require('express');
// const todoController = require('./controllers/todoController');
const todoControllerMongo = require('./controllers/todoControllerMongo');

const app = express();

app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

todoControllerMongo(app);
console.log('listening to port 3000');
