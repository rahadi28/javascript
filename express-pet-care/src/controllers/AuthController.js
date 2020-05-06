var { users } = require("../models");
var authService = require("../services/AuthService.js");
var { to, resError, resSuccess } = require("../utils/utilities.js");

class AuthController {
  static async signUp(req, res, next) {
    const body = req.body;

    if (!body.uniqueKey && !body.email && !body.phoneNumber) {
      return resError(
        res,
        "Please enter an email or phone number to register."
      );
    } else if (!body.password) {
      return resError(res, "Please enter a password to register.");
    } else {
      let err, user;

      [err, user] = await to(authService.signUp(body));
      if (err) return resError(res, err, 422);

      return resSuccess(
        res,
        {
          message: "Successfully created new user.",
          user: user.toWeb(),
          token: user.getJWT(),
        },
        201
      );
    }
  }

  static async signIn(req, res, next) {
    var body = req.body;
    let err, user;

    [err, user] = await to(authService.signIn(body));
    if (err) return resError(res, err, 422);

    return resSuccess(res, { token: user.getJWT(), user: user.toWeb() });
  }
}

module.exports = AuthController;
