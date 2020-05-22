var express = require("express");
var router = express.Router();
var productRouter = require("./productRouter");

/* Get home page. */
router.get("/", function (req, res, next) {
    res.send("<h1>Welcome to Express</h1>");
});

/* Get api endpoint. */
router.get("/api", function (req, res, next) {
    res.json({ message: "Welcome to api endpoint." });
});

router.use("/api/product", productRouter);

module.exports = router;
