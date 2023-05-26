"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = exports.getAllUsers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _email = require("../utils/email.util");
var _logger = _interopRequireWildcard(require("../config/logger"));
var _finalcomment = _interopRequireDefault(require("../models/finalcomment.model"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var email, password, fullName, data, hashedPassword, _data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("Hey Jeth");
          email = body.email, password = body.password, fullName = body.fullName;
          _context.next = 4;
          return _user["default"].findOne({
            email: email
          });
        case 4:
          data = _context.sent;
          console.log(data);
          if (!(data === null)) {
            _context.next = 16;
            break;
          }
          _context.next = 9;
          return _bcrypt["default"].hash(password, 10);
        case 9:
          hashedPassword = _context.sent;
          _context.next = 12;
          return _user["default"].create({
            fullName: fullName,
            email: email,
            password: hashedPassword
          });
        case 12:
          _data = _context.sent;
          return _context.abrupt("return", _data);
        case 16:
          throw new Error("Email already registered");
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function register(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.register = register;
var getAllUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].find();
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getAllUsers() {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllUsers = getAllUsers;
var login = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var email, password, data, result, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          email = body.email, password = body.password;
          _context3.next = 3;
          return _user["default"].findOne({
            email: email
          });
        case 3:
          data = _context3.sent;
          _context3.next = 6;
          return _bcrypt["default"].compare(password, data.password);
        case 6:
          result = _context3.sent;
          if (!data) {
            _context3.next = 18;
            break;
          }
          if (!result) {
            _context3.next = 15;
            break;
          }
          _context3.next = 11;
          return _jsonwebtoken["default"].sign({
            Id: data._id,
            email: data.email
          }, process.env.SECRET_KEY);
        case 11:
          token = _context3.sent;
          return _context3.abrupt("return", token);
        case 15:
          throw new Error('Wrong credentials');
        case 16:
          _context3.next = 19;
          break;
        case 18:
          throw new Error("Details not found");
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function login(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
exports.login = login;