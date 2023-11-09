const express = require('express');
const router = express.Router();

const {
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controller/blogController.js');
const checkAuth = require('../middleware/authMiddleware.js');

// http://localhost:3000/api/blogs/createblog
router.route('/createblog').post(checkAuth, createBlog);

// http://localhost:3000/api/blogs/updateblog/:id
router.route('/updateblog/:id').put(checkAuth, updateBlog);

// http://localhost:3000/api/blogs/deleteblog/:id
router.route('/deleteblog/:id').delete(checkAuth, deleteBlog);

module.exports = router;
