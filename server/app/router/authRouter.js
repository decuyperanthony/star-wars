const express = require('express');
const router = express.Router();

// == controller
const authController = require('../controllers/authController');

//* === === === === ROUTE === === === ===
router.post('/login', authController.loginAction);

module.exports = router