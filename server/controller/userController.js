const User = require('../models/User.js');
const hashPassword = require('../helpers/userHelper.js');
const validator = require('validator');

//endpoint for testing
const test = (req, res) => {
  return res.status(200).json({ message: 'testing the end point' });
};

//endpoint for create user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Please fill all the required fields' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email' });
  }
  if (!validator.isPassword(password)) {
    return res.status(400).json({ message: 'Please enter a strong password' });
  }

  //encrypting the password
  const hashedPassword = hashPassword(password);

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return res
      .status(200)
      .json({ message: 'User saved successfully', savedUser });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { test, createUser };
