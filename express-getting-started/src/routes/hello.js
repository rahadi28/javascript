import express from "express";

export default express.Router().get("/:angkaSatu/:angkaDua", (req, res) => {
  console.log(req.params);
  res
    .status(200)
    .send(
      "Result : " + (Number(req.params.angkaSatu) + Number(req.params.angkaDua))
    );
});
