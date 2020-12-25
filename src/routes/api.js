const express = require("express");
const router = express.Router();
const productAPI = require('../api/ProductAPI');
const {checkAuthenticated, checkNotAuthenticated} = require('../config/auth');

router.get("/product/:id", productAPI.getProductById);

module.exports = router;
