var express = require("express");
var passport = require("passport");
var router = express.Router();
var UserController = require("../controllers/UserController.js");

/* Find all users. */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UserController.findAll
);

/* Create users */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  UserController.create
);

/* Update users */
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.update
);

/* Destroy users */
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.destroy
);

module.exports = router;
