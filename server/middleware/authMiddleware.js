const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const checkAuth = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    if (!cookie) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const token = cookie.jwt;
    if (!token) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);
    //console.log(decodedToken);
    next();
  } catch (error) {
    return res.status(403).json({ message: error.message });
  }
};

module.exports = checkAuth;
