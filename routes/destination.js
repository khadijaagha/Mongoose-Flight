var express = require('express');
var router = express.Router();
const destinationCtrl = require('../controllers/destinations');


//POST /movies/:id/destination
router.post('/flights/:id/destinations', destinationCtrl.createDestination);

module.exports = router;