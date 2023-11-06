const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
//hashing the password
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error(error);
  }
};

//creating the token
const createToken = async (user) => {
  const { _id, email } = user;
  try {
    const token = jwt.sign({ _id, email }, process.env.SECRET, {
      expiresIn: '1h',
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

//comparing the password
const comparePassword = async (password, hashpassword) => {
  try {
    const match = await bcrypt.compare(password, hashpassword);
    return match;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { hashPassword, createToken, comparePassword };
