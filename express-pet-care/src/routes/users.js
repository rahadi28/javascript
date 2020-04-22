var express = require("express");
var router = express.Router();
var model = require("../models/index.js");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        status: "OK",
        messages: "",
        data: users,
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

/* POST users */
router.post("/", async function (req, res, next) {
  try {
    const { name, email, gender, phoneNumber } = req.body;
    const users = await model.users.create({
      name,
      email,
      gender,
      phoneNumber,
    });
    if (users) {
      res.status(201).json({
        status: "OK",
        messages: "User berhasil ditambahkan",
        data: users,
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

/* UPDATE users */
router.patch("/:id", async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const { name, email, gender, phoneNumber } = req.body;
    const users = await model.users.update(
      {
        name,
        email,
        gender,
        phoneNumber,
      },
      {
        where: {
          id: usersId,
        },
      }
    );
    if (users) {
      res.json({
        status: "OK",
        messages: "User berhasil diupdate",
        data: users,
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

/* DELETE users */
router.delete("/:id", async function (req, res, next) {
  try {
    const usersId = req.params.id;
    console.log(usersId);
    const users = await model.users.destroy({
      where: {
        id: usersId,
      },
    });
    if (users) {
      res.json({
        status: "OK",
        messages: "User berhasil dihapus",
        data: users,
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
