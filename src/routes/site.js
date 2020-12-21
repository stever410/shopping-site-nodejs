const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const user = req.user;
  if (req.user != null) {
    res.render("index", {
        name: user.firstName + " " + user.lastName,
        image: user.image
    });
  } else {
    res.render("index");
  }
});

module.exports = router;
