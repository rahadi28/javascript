var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController.js");

/* Find all users. */
router.get("/", UserController.findAll);

/* Create users */
router.post("/", UserController.create);

/* Update users */
router.patch("/:id", UserController.update);

/* Destroy users */
router.delete("/:id", UserController.destroy);

module.exports = router;
