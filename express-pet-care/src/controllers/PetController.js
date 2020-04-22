var model = require("../models/index.js");

class PetController {
  static async findAll(req, res, next) {
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
  }

  static async create(req, res, next) {
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
  }

  static async update(req, res, next) {
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
  }

  static async destroy(req, res, next) {
    try {
      const petsId = req.params.id;
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
  }
}

module.exports = PetController;
