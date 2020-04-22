var express = require("express");
var router = express.Router();
var PetController = require("../controllers/PetController.js");

router.get("/", PetController.findAll);

router.post("/", PetController.create);

router.patch("/:id", PetController.update);

router.delete("/:id", PetController.destroy);

module.exports = router;
