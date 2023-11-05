const bcrypt = require('bcrypt');

//hashing the password
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error('password hashing failed', error);
  }
};

module.exports = hashPassword;
