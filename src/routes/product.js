const express = require("express");
const router = express.Router();
const productController = require('../controllers/ProductController');
const {checkAuthenticated, checkNotAuthenticated} = require('../config/auth');

router.get("/", (req, res) => res.render("index"));
router.get("/manage", productController.getAllProducts);
router.post("/add", checkAuthenticated, productController.addProduct);
router.get("/:id", productController.getProductById);
router.put("/:id",checkAuthenticated, productController.updateProduct);

module.exports = router;
