const User = require('../models/User.js');
const {
  hashPassword,
  createToken,
  comparePassword,
} = require('../helpers/userHelper.js');
const validator = require('validator');
const { request } = require('express');
const jwt = require('jsonwebtoken');

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
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: 'Please enter a strong password' });
  }

  //encrypting the password
  const hashedPassword = await hashPassword(password);

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
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

//log in user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please fill all the required fields' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    //comparing the passsword
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    //creating the token
    const token = await createToken(user);
    res.cookie('jwt', token, { httponly: true, maxAge: 360000 });
    return res.status(200).json({
      message: 'User logged in successfully',
      token: token,
      username: user.username,
      email: user.email,
      blogs: user.blogs,
      profilepicture: user.profilepicture,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//updating the user
const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(404).json({ message: 'Invalid update data entered' });
    }

    const user = await User.findByIdAndUpdate(_id, updates, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res
      .status(200)
      .json({ message: 'User updated successfully', user: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//deleting the user
const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    //decode the token from cookie
    const decodedToken = jwt.verify(req.cookies.jwt, process.env.SECRET);
    console.log(decodedToken);

    //compare the id send with cookie and params
    if (_id !== decodedToken._id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    //delete the user
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    //when removing the users remove user blogs as well
    //delete the cookies
    res.clearCookie('jwt');

    return res
      .status(200)
      .json({ message: 'User deleted', username: user.username });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { test, createUser, loginUser, updateUser, deleteUser };
