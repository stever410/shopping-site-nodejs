const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Product", productSchema);
