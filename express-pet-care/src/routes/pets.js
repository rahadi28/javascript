var express = require("express");
var router = express.Router();
var model = require("../models/index.js");

router.get("/", async function (req, res, next) {
  try {
    const pets = await model.pets.findAll({});
    if (pets.length !== 0) {
      res.json({
        status: "OK",
        messages: "",
        data: pets,
      });
    } else {
      res.json({
        status: "ERROR",
        messages: "EMPTY",
        data: {},
      });
    }
  } catch (err) {
    res.json({
      status: "ERROR",
      messages: err.messages,
      data: {},
    });
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { petName, species, gender } = req.body;
    const pets = await model.pets.create({
      petName,
      species,
      gender,
    });
    if (pets) {
      res.status(201).json({
        status: "OK",
        messages: "Pet berhasil ditambahkan",
        data: pets,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {},
    });
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const petsId = req.params.id;
    const { petName, species, gender } = req.body;
    const pets = await model.pets.update(
      {
        petName,
        species,
        gender,
      },
      {
        where: {
          id: petsId,
        },
      }
    );
    if (pets) {
      res.json({
        status: "OK",
        messages: "Pet berhasil diupdate",
        data: pets,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {},
    });
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const petsId = req.params.id;
    console.log(petsId);
    const pets = await model.pets.destroy({
      where: {
        id: petsId,
      },
    });
    if (pets) {
      res.json({
        status: "OK",
        messages: "Pet berhasil dihapus",
        data: pets,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {},
    });
  }
});

module.exports = router;
