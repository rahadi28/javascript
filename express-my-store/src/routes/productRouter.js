var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController.js");

/* Find all products */
router.get("/", productController.findAll);

/* Create products */
router.post("/", productController.create);

/* Update products */
router.patch("/:id", productController.update);

/* Destroy products */
router.delete("/:id", productController.destroy);

module.exports = router;
