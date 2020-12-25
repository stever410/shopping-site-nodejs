const Product = require("../models/Product");

class ProductAPI {
  async getProductById(req, res, next) {
    try {
      const product = await Product.findById({_id: req.params.id});
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ProductAPI();
