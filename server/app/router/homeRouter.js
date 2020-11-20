const express = require('express');
const router = express.Router();

// == controller
const homeController = require('../controllers/homeController');

//* === === === === ROUTE === === === ===
router.get('/soldiers', homeController.getAllSoldiers);
router.get('/soldier/:search', homeController.getSoldierByName);

module.exports = router