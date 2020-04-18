var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").config();
var exphbs = require("express-handlebars");

/* for body-parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* for passport */
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

/* for express-handlebars */
app.set("views", "./app/views");
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.get("/", function (req, res) {
  res.send("Welcome to Express-Sequelize with Passport");
});

/* models */
var models = require("./app/models");

/* routes */
var authRoute = require("./app/routes/auth.js")(app, passport);

/* load passport strategies */
require("./app/config/passport/passport.js")(passport, models.user);

/* sync database */
models.sequelize
  .sync()
  .then(function () {
    console.log("Nice! Database looks fine");
  })
  .catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

app.listen(5000, function (err) {
  if (!err) console.log("Site is live on http://localhost:5000/");
  else console.log(err);
});
