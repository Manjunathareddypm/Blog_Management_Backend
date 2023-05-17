"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuthForAuthor = exports.userAuth = exports.user = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var user;
exports.user = user;
var userAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          bearerToken = req.header('Authorization');
          console.log("Req of auth----->", req.body);
          if (bearerToken) {
            _context.next = 5;
            break;
          }
          throw {
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: 'Authorization token is required'
          };
        case 5:
          bearerToken = bearerToken.split(' ')[1];
          _context.next = 8;
          return _jsonwebtoken["default"].verify(bearerToken, process.env.SECRET_KEY);
        case 8:
          exports.user = user = _context.sent;
          console.log("User", user, "-------->>>>");
          req.body.Email = user.email;
          // req.body.email = user.email
          // userName = user.Id
          next();
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function userAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.userAuth = userAuth;
var userAuthForAuthor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var bearerToken;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          bearerToken = req.header('Authorization');
          console.log("Req of auth----->", req.body);
          if (bearerToken) {
            _context2.next = 5;
            break;
          }
          throw {
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: 'Authorization token is required'
          };
        case 5:
          bearerToken = bearerToken.split(' ')[1];
          _context2.next = 8;
          return _jsonwebtoken["default"].verify(bearerToken, process.env.SECRET_KEY);
        case 8:
          exports.user = user = _context2.sent;
          console.log("User", user, "-------->>>>");
          // req.body.Email = user.email
          req.body.email = user.email;
          // userName = user.Id
          next();
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function userAuthForAuthor(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.userAuthForAuthor = userAuthForAuthor;