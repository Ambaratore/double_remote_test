const express = require('express');

const routerAuth = express.Router();
const userService = require('./userService');

// routes
routerAuth.get('/authenticate', (req, res, next) => {
  userService.authenticate(req.body)
    .then((user) => res.json(user))
    .catch((err) => next(err));
});
// routerAuth.get('/', (req, res, next) => {
//   userService.getAll()
//     .then((users) => res.json(users))
//     .catch((err) => next(err));
// });

module.exports = routerAuth;
