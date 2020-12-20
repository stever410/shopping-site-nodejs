require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Set template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Express body parser
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res, next) => res.render('index'));

app.listen(process.env.PORT, () => {
  console.log("Listening on http://localhost:" + process.env.PORT);
});
