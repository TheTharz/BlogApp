const Blog = require('../models/Blog');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

//creating a blog post
const createBlog = async (req, res) => {
  const { title, body, picture } = req.body;
  const decodedToken = jwt.verify(req.cookies.jwt, process.env.SECRET);
  const author = decodedToken._id;

  if (!title || !body || !picture) {
    return res
      .status(400)
      .json({ message: 'Please fill all the required fields' });
  }

  try {
    const newBlog = new Blog({
      title,
      body,
      picture,
      author,
    });

    const savedBlog = await newBlog.save();

    return res
      .status(200)
      .json({ message: 'Blog created successfully here', blog: savedBlog });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  //console.log({ author: author, title: title, body: body, picture: picture });
};

// updating a blog
const updateBlog = async (req, res) => {
  const _id = req.params.id;
  const updates = req.body;
  const decodedToken = jwt.verify(req.cookies.jwt, process.env.SECRET);

  try {
    const blog = await Blog.findById(_id);
    if (!blog) {
      return res.status(404).json({ message: 'Could not find the blog' });
    }
    // console.log(blog);
    // console.log(decodedToken);
    if (!blog.author.equals(decodedToken._id)) {
      return res
        .status(403)
        .json({ message: 'Forbidden for updating this post' });
    }
    const updatedPost = await Blog.findByIdAndUpdate(_id, updates, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: 'Post updated successfully', updatedPost: updatedPost });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//deleting the blog
const deleteBlog = async (req, res) => {
  const _id = req.params.id;
  const decodedToken = jwt.verify(req.cookies.jwt, process.env.SECRET);
  try {
    const blog = await Blog.findById(_id);
    if (!blog) {
      return res.status(404).json({ message: 'Could not find the blog' });
    }
    if (!blog.author.equals(decodedToken._id)) {
      return res.status(403).json({ message: 'Forbidden to delete this blog' });
    }

    const deletedBlog = await Blog.findByIdAndDelete(_id);

    return res
      .status(200)
      .json({ message: 'Blog deleted successfully', deletedBlog: deletedBlog });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createBlog, updateBlog, deleteBlog };
