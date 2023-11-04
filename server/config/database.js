const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
module.exports = connectDB;
