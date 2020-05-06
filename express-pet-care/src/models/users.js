"use strict";
require("dotenv").config();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var bcryptPromise = require("bcrypt-promise");
var { throwError, to } = require("../utils/utilities.js");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    fullName: DataTypes.STRING,
    gender: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: {
          args: [7, 20],
          msg: "Phone number invalid, too short.",
        },
        isNumeric: {
          msg: "Not a valid phone number.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email address invalid.",
        },
      },
    },
    password: DataTypes.STRING,
  });

  users.associate = function (models) {
    // associations can be defined here
  };

  users.beforeSave(async (user, options) => {
    let err;
    if (user.changed("password")) {
      let salt, hash;

      [err, salt] = await to(bcrypt.genSalt(10));
      if (err) throwError(err.message, true);

      [err, hash] = await to(bcrypt.hash(user.password, salt));
      if (err) throwError(err.message, true);

      user.password = hash;
    }
  });

  users.prototype.comparePassword = async function (pw) {
    let err, pass;
    if (!this.password) throwError("Password not set");

    [err, pass] = await to(bcryptPromise.compare(pw, this.password));
    if (err) throwError(err);

    if (!pass) throwError("invalid password");

    return this;
  };

  users.prototype.getJWT = function () {
    let jwtEncryption = process.env.JWT_ENCRYPTION;
    let jwtExpiration = parseInt(process.env.JWT_EXPIRATION);
    return (
      "Bearer " +
      jwt.sign({ userId: this.id }, jwtEncryption, { expiresIn: jwtExpiration })
    );
  };

  users.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };

  return users;
};
