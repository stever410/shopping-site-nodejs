const express = require("express");
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get("/", productController.getAllProducts);
router.get("/product", (req, res) => res.render("product"));

module.exports = router;
