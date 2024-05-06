const express = require('express');
const router = express.Router();
const mongoInstanceController = require('../controllers/mongoInstanceController');

router.get('/', mongoInstanceController.getAllInstances);


module.exports = router;