require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const methodOverride = require('method-override')
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'))


// Config database
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Set template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Passport initilization
require('./config/passport')(passport);
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Init flash message
app.use(flash());

app.use((req, res,next) => {
  res.locals.currentUser = req.user;
  next();
})

require('./routes/route')(app);

app.listen(process.env.PORT, () => {
  console.log("Listening on http://localhost:" + process.env.PORT);
});
