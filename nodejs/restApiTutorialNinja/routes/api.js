const express = require('express');

const router = express.Router();

// GET DATA FROM MONGO
router.get('/ninja', (req, res) => {
  res.end('GET response');
});

// ADD DATA ON MONGO
router.post('/ninja', (req, res) => {
  res.end('POST response');
});

// UPDATE DATA ON MONGO
router.put('/ninja/:item', (req, res) => {
  res.end('PUT response');
});

// DELETE DATA FROM MONGO
router.delete('/ninja/:item', (req, res) => {
  res.end('DELETE response');
});

module.exports = router;
