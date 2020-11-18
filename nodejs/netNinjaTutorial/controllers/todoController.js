const bodyParser = require('body-parser');

let dataInit = [{ item: 'get milk' }, { item: 'get beer' }, { item: 'get meat' }];

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get('/todo', (req, res) => {
    res.render('todo', { data: dataInit });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    dataInit.push({ item: req.body.item });
    // res.render('todo', { data: dataInit });
    res.json(dataInit);
  });

  app.delete('/todo/:item', (req, res) => {
    console.log(req.url);
    dataInit = dataInit.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
    res.json(dataInit);
  });
};
