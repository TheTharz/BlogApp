const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  picture: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Blog = mongoose.model('Blog', BlogShema);
module.exports = Blog;
