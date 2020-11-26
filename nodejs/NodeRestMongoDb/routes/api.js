const express = require('express');
const NTutorial = require('../model/ntutorial');

const router = express.Router();

// GET ALL OBJECT
router.get('/ntutorials', (req, res) => {
  NTutorial.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// POST OBJECT
router.post('/ntutorials', (req, res) => {
  NTutorial.create(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

// DELETE ALL OBJECT
// router.delete('/ntutorials', (req, res) => {
//   NTutorial.deleteMany({})
//     .then(() => res.end('ALL OBJECTS DELETED'))
//     .catch((err) => res.send(err));
// });

// GET OBJECT BY ID
router.get('/ntutorials/:id', (req, res) => {
  const { id } = req.params;
  NTutorial.findOne({ _id: id }, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// PUT OBJECT BY ID
router.put('/ntutorials/:id', (req, res) => {
  const { id } = req.params;
  NTutorial.findByIdAndUpdate(id, req.body).then(() => {
    NTutorial.findOne({ _id: id }, (err2, data) => {
      if (err2) throw err2;
      res.send(data);
    });
  }).catch((err) => res.send(err));
});

// DELETE OBJECT BY ID
router.delete('/ntutorials/:id', (req, res) => {
  const { id } = req.params;
  NTutorial.findByIdAndRemove(id)
    .then(() => res.end(`id: ${id} DELETED`))
    .catch((err) => res.send(err));
});

module.exports = router;
