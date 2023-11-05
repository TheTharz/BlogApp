const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
