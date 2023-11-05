const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/database.js');

//importing routes from route
const userRoutes = require('./routes/userRoutes.js');

const app = express();

//database connection
connectDB();

//middleware
app.use(express.json());

//routes
app.use('/api/users', userRoutes);
module.exports = app;
