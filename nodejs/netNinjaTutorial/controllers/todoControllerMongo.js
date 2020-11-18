const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// mongo connect
mongoose.connect('mongodb+srv://tore:Nwjr7xITHyETuN9i@cluster0.59rkq.mongodb.net/todo?retryWrites=true&w=majority');
// create schema
const todoSchema = new mongoose.Schema({
  item: String,
});
// create model
const Todo = new mongoose.model('Todo', todoSchema);
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get('/todo', (req, res) => {
    // get all items from mongoDb
    Todo.find({}, (err, dataOut) => {
      if (err) throw err;
      res.render('todo', { data: dataOut });
    });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    const todoItem = Todo(req.body);
    todoItem.save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
    // res.render('todo', { data: dataInit });
  });

  app.delete('/todo/:item', (req, res) => {
    const todoItem = Todo.find({ item: req.params.item.replace(/-/g, ' ') });
    todoItem.remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
};
