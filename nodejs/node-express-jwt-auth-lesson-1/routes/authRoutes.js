const express = require('express');
const controllers = require('../controllers/authController');

const router = express.Router();

router.get('/signup', controllers.get_signup);
router.post('/signup', controllers.post_signup);
router.get('/login', controllers.get_login);
router.post('/login', controllers.post_login);

module.exports = router;
