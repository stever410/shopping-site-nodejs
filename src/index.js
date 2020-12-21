require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

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

require('./routes/route')(app);

app.listen(process.env.PORT, () => {
  console.log("Listening on http://localhost:" + process.env.PORT);
});
