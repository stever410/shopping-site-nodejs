const passport = require("passport");
const User = require("../models/User");

class UserController {
  login(req, res, next) {
    try {
      passport.authenticate("local-login", (err, user, info) => {
        if(err) return next(err);
        console.log(info);
        if(!user) return res.json(info);
        req.logIn(user, (err) => {
          if(err) return next(err);
          return res.redirect('/');
        });
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

  logout(req, res, next) {
    req.logout();
    res.redirect("/");
  }
}

module.exports = new UserController();
