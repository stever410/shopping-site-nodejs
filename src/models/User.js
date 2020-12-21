const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  dob: {
    type: Date,
    default: Date.now,
  },
  image: String
});

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = (password, userPassword) => {
  return bcrypt.compareSync(password, userPassword);
};

module.exports = mongoose.model("User", userSchema);
