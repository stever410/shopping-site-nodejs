const Product = require("../models/Product");
const moment = require("moment");

class ProductController {
  async addProduct(req, res, next) {
    let newProduct = new Product(req.body);
    try {
      if (req.user !== null) {
        newProduct.addedBy = req.user.email;
        await newProduct.save();
        res.redirect("/product/manage");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async updateProduct(req, res, next) {
    let { name, category, description, price, image } = req.body;
    try {
      if (req.user !== null) {
        await Product.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name,
              category,
              description,
              price,
              image,
              lastUpdatedBy: req.user.email,
            },
          }
        );
        res.redirect("/product/manage");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const products = await Product.find({});
      const url = req.originalUrl;
      if (url == "/") {
        res.render("index", { products });
      } else {
        res.render("manage-product", { products, moment });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getProductById(req, res, next) {
    try {
      const product = await Product.findById({ _id: req.params.id });
      res.render("product-detail", { product });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new ProductController();
