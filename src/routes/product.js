const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.get("/manage", (req, res) => res.render("manage-product"));

module.exports = router;
