const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    await User.findById({ _id: id }, (err, user) => {
      done(err, user);
    });
  });

  // Local sign-in
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        await User.findOne({ email }, (err, user) => {
          if (err) return done(req.flash("error"));
          if (!user)
            return done(null, false, { message: "No user found" });
          if (!user.validPassword(password, user.password))
            return done(null, false, { message: "Wrong password" });
          return done(null, user);
        });
      }
    )
  );
};
