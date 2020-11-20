const express = require('express');
const router = express.Router();

// == controller
const homeController = require('../controllers/homeController');

//* === === === === ROUTE === === === ===
router.get('/soldiers', homeController.getAllSoldiers);

module.exports = router