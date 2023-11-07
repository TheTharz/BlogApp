const express = require('express');
const router = express.Router();

const {
  test,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require('../controller/userController.js');

const checkAuth = require('../middleware/authMiddleware.js');

// http://localhost:3000/api/users/test
router.route('/test').get(test);

// http://localhost:3000/api/users/createuser
router.route('/createuser').post(createUser);

// http://localhost:3000/api/users/login
router.route('/login').post(loginUser);

// http://localhost:3000/api/users/updateuser/:id
router.route('/updateuser/:id').put(checkAuth, updateUser);

// http://localhost:3000/api/users/deleteuser/:id
router.route('/deleteuser/:id').delete(checkAuth, deleteUser);

module.exports = router;
