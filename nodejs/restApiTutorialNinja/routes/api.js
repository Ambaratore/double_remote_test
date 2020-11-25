const express = require('express');
const Ninja = require('../model/ninja');

const router = express.Router();

// GET DATA FROM MONGO
router.get('/ninja', (req, res) => {
  Ninja.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// GET DATA FROM MONGO GEONEAR
router.get('/ninja/geo', (req, res) => {
  const maxDist = parseFloat(req.query.distance) || 1000000;
  Ninja.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [-88, 40] },
        maxDistance: maxDist,
        spherical: true,
        distanceField: 'dist.calculated',
      },
    }]).then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// ADD DATA ON MONGO
router.post('/ninja', (req, res) => {
  Ninja.create(req.body).then((data) => {
    res.send(data);
  }).catch((err) => res.send(err));
});

// UPDATE DATA ON MONGO
router.put('/ninja/:id', (req, res) => {
  const { id } = req.params;
  Ninja.findByIdAndUpdate(id, req.body).then(() => {
    Ninja.findOne({ _id: id }, (err2, data) => {
      if (err2) throw err2;
      res.send(data);
    });
  }).catch((err) => res.send(err));
});

// DELETE DATA FROM MONGO
router.delete('/ninja/:id', (req, res) => {
  const { id } = req.params;
  Ninja.findByIdAndRemove(id).then(() => res.end(`id: ${id} DELETED`));
});

module.exports = router;
