require("dotenv").config();
var { ExtractJwt, Strategy } = require("passport-jwt");
var { users } = require("../models/index.js");
var { throwError, to } = require("../utils/utilities.js");

// create jwt strategy
module.exports = (passport) => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.JWT_ENCRYPTION || "express-pet-care";

  passport.use(
    new Strategy(opts, async function (jwtPayload, done) {
      let err, user;

      [err, user] = await to(users.findByPk(jwtPayload.userId));
      if (err) return done(err, false);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );
};
