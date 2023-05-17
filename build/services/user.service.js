"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replayComment = exports.register = exports.oneMoreLogic = exports.login = exports.likeCommentPost = exports.getAllUsers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _email = require("../utils/email.util");
var _logger = _interopRequireWildcard(require("../config/logger"));
var _user2 = require("../utils/user.util");
var _finalcomment = _interopRequireDefault(require("../models/finalcomment.model"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].find();
        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllUsers = getAllUsers;
var register = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var email, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          email = body.email;
          _context2.next = 4;
          return _user["default"].findOne({
            email: email
          });
        case 4:
          data = _context2.sent;
          console.log(data);
          return _context2.abrupt("return", (0, _user2.checkEmail)(body, data));
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _logger["default"].error(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function register(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.register = register;
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
var oneMoreLogic = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var parentId, data, searchInBlog, created;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          parentId = req.params.id;
          data = req.body.comment;
          console.log(data, parentId, '=================>');
          _context4.next = 5;
          return _finalcomment["default"].findById({
            _id: parentId
          });
        case 5:
          searchInBlog = _context4.sent;
          _context4.next = 8;
          return _finalcomment["default"].create({
            parent: parentId,
            Comment: data,
            type: type,
            likes: []
          });
        case 8:
          created = _context4.sent;
          return _context4.abrupt("return", created);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function oneMoreLogic(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
exports.oneMoreLogic = oneMoreLogic;
var replayComment = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req) {
    var parentId, data, blogId, created;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          parentId = req.params.id;
          data = req.body.comment;
          blogId = req.params.blogid;
          console.log(data, parentId, blogId, '=================>');
          _context5.next = 6;
          return _finalcomment["default"].create({
            blogId: blogId,
            parent: parentId,
            Comment: data
            // type: type,
            // likes: []
          });
        case 6:
          created = _context5.sent;
          return _context5.abrupt("return", created);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function replayComment(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
exports.replayComment = replayComment;
var likeCommentPost = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, email) {
    var data, Likes, data1;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          console.log(id, 'ID');
          _context6.next = 3;
          return _finalcomment["default"].findById(id);
        case 3:
          data = _context6.sent;
          console.log(email, data, 'from like post ===>26');
          Likes = data.Likes;
          _context6.next = 8;
          return Likes.includes(email);
        case 8:
          if (!_context6.sent) {
            _context6.next = 17;
            break;
          }
          _context6.next = 11;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            $pull: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 11:
          data1 = _context6.sent;
          _context6.next = 14;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 14:
          data1 = _context6.sent;
          _context6.next = 23;
          break;
        case 17:
          _context6.next = 19;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            $push: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 19:
          data1 = _context6.sent;
          _context6.next = 22;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 22:
          data1 = _context6.sent;
        case 23:
          return _context6.abrupt("return", data1);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function likeCommentPost(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
exports.likeCommentPost = likeCommentPost;