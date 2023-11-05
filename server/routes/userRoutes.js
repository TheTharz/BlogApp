const express = require('express');
const router = express.Router();

const { test, createUser } = require('../controller/userController.js');

// http://localhost:3000/api/users/test
router.route('/test').get(test);

// http://localhost:3000/api/users/createuser
router.route('/createuser').post(createUser);

module.exports = router;
