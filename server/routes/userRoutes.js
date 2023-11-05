const express = require('express');
const router = express.Router();

const test = require('../controller/userController.js');

router.route('/test').get(test);

module.exports = router;
