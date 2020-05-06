var express = require("express");
var router = express.Router();
var usersRouter = require("./users.js");
var petsRouter = require("./pets.js");
var AuthController = require("../controllers/AuthController.js");

/* Get home page. */
router.get("/", function (req, res, next) {
  res.send("<h1>Welcome to Express</h1>");
});

/* Get api endpoint. */
router.get("/api", function (req, res, next) {
  res.json({ message: "Welcome to api endpoint." });
});

router.post("/api/signup", AuthController.signUp);
router.post("/api/signin", AuthController.signIn);
router.use("/api/users", usersRouter);
router.use("/api/pets", petsRouter);

module.exports = router;
