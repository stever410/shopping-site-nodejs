const Product = require("../models/Product");

class ProductController {
    
  async addProduct(req, res, next) {
    let newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  }
  
}

module.exports = new ProductController();
