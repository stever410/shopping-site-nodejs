const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");

class AuthController {
  login(req, res, next) {
    try {
      passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/",
        failureFlash: true,
      })(req, res, next);
    } catch (err) {
      console.log(err);
    }
  }

  async register(req, res, next) {
    let newUser = new User(req.body);
    newUser.password = newUser.generateHash(newUser.password);
    try {
      await newUser.save();
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new AuthController();
