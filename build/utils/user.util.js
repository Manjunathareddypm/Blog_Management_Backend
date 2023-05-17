"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _user = _interopRequireDefault(require("../models/user.model"));
var checkEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body, data) {
    var email, password, fullName, hashedPassword, _data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          email = body.email, password = body.password, fullName = body.fullName;
          if (!(data === null)) {
            _context.next = 11;
            break;
          }
          _context.next = 4;
          return _bcrypt["default"].hash(password, 10);
        case 4:
          hashedPassword = _context.sent;
          _context.next = 7;
          return _user["default"].create({
            fullName: fullName,
            email: email,
            password: hashedPassword
          });
        case 7:
          _data = _context.sent;
          return _context.abrupt("return", _data);
        case 11:
          throw new Error("Email already registered");
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function checkEmail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.checkEmail = checkEmail;