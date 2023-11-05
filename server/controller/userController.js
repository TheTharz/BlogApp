const User = require('../models/User.js');
const hashPassword = require('../helpers/userHelper.js');
//endpoint for testing
const test = (req, res) => {
  return res.status(200).json({ message: 'testing the end point' });
};

//endpoint for create user
const createUser = (req, res) => {
  const { username, email, password } = req.body;

  //encrypting the password
  const hashedPassword = hashPassword(password);
};
module.exports = { test, createUser };
