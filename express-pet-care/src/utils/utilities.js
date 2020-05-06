var ParseError = require("parse-error");
var { to } = require("await-to-js");
var exports = (module.exports = {});

exports.resError = function (res, err, code) {
  // Error Web Response
  if (typeof err == "object" && typeof err.message != "undefined") {
    err = err.message;
  }

  if (typeof code !== "undefined") res.statusCode = code;

  return res.json({ success: false, error: err });
};

exports.resSuccess = function (res, data, code) {
  // Success Web Response
  let sendData = { success: true };

  if (typeof data == "object") {
    sendData = Object.assign(data, sendData); // Merge the objects
  }

  if (typeof code !== "undefined") res.statusCode = code;

  return res.json(sendData);
};

exports.throwError = function (errMessage, log) {
  if (log === true) {
    console.error(errMessage);
  }
  throw new Error(errMessage);
};

exports.to = async (promise) => {
  let err, res;
  [err, res] = await to(promise);
  if (err) return [ParseError(err)];
  return [null, res];
};
