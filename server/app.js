const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/database.js');

const app = express();

//database connection
connectDB();

module.exports = app;
