var validator = require("validator");
var { users } = require("../models");
var { throwError, to } = require("../utils/utilities.js");

var getUniqueKeyFromBody = function (body) {
  let uniqueKey = body.uniqueKey;
  if (typeof uniqueKey === "undefined") {
    if (typeof body.email != "undefined") {
      uniqueKey = body.email;
    } else if (typeof body.phoneNumber != "undefined") {
      uniqueKey = body.phoneNumber;
    } else {
      uniqueKey = null;
    }
  }
  return uniqueKey;
};
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

var signUp = async function (userInfo) {
  let uniqueKey, err;
  uniqueKey = getUniqueKeyFromBody(userInfo);
  if (!uniqueKey) throwError("An email or phone number was not entered.");

  if (validator.isEmail(uniqueKey)) {
    userInfo.email = uniqueKey;

    [err, user] = await to(users.create(userInfo));
    if (err) throwError("User already exists with that email");
    return user;
  } else if (validator.isMobilePhone(uniqueKey, "any")) {
    userInfo.phoneNumber = uniqueKey;

    [err, user] = await to(users.create(userInfo));
    if (err) throwError("User already exists with that phone number");
    return user;
  } else {
    throwError("A valid email or phone number was not entered.");
  }
};
module.exports.signUp = signUp;

var signIn = async function (userInfo) {
  let uniqueKey;
  uniqueKey = getUniqueKeyFromBody(userInfo);
  if (!uniqueKey) throwError("Please enter an email or phone number to login");
  if (!userInfo.password) throwError("Please enter a password to login");

  let user;
  if (validator.isEmail(uniqueKey)) {
    [err, user] = await to(users.findOne({ where: { email: uniqueKey } }));
    if (err) throwError(err.message);
  } else if (validator.isMobilePhone(uniqueKey, "any")) {
    [err, user] = await to(
      users.findOne({ where: { phoneNumber: uniqueKey } })
    );
    if (err) throwError(err.message);
  } else {
    throwError("A valid email or phone number was not entered");
  }
  if (!user) throwError("Not registered");

  [err, user] = await to(user.comparePassword(userInfo.password));
  if (err) throwError(err.message);

  return user;
};
module.exports.signIn = signIn;
