"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var PostValidator = function PostValidator(req, res, next) {
  var schema = _joi["default"].object({
    Title: _joi["default"].string().min(3).required(),
    Description: _joi["default"].string().required(),
    Type: _joi["default"].string(),
    Email: _joi["default"].string().min(3),
    date: _joi["default"].date(),
    data: _joi["default"].string()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
exports.PostValidator = PostValidator;