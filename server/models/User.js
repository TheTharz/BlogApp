const mongoose = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
    profilepicture: String,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', UserSchema);
module.exports = User;
