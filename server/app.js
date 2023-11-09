const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/database.js');
const cookieParser = require('cookie-parser');

//importing routes from route
const userRoutes = require('./routes/userRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');
const app = express();

//database connection
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

module.exports = app;
