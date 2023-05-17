"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewPost = exports.updatePost = exports.senMailForComment = exports.replyToComment = exports.oneMoreLogic = exports.numberOfLikes = exports.likeReplyOfComment = exports.likePost = exports.likeCommentPost = exports.getReplyToIndividual = exports.getReplyCommentNumber = exports.getPostById = exports.getParticularReplyComment = exports.getParticularComment = exports.getAllReplies = exports.getAllPost = exports.getAllCommentNewLogic = exports.findPostByText = exports.findMyPost = exports.findMyLikedPost = exports.findAllComment = exports.deleteReplyComment = exports.deletePost = exports.deleteComment = exports.createPost = exports.arrangeByLikesSortLowToHigh = exports.arrangeByLikesSortHighToLow = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var PostService = _interopRequireWildcard(require("../services/post.service"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return PostService.createPost(req.body);
        case 3:
          data = _context.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Post created successfully'
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function createPost(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createPost = createPost;
var getAllPost = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return PostService.getAllPost();
        case 3:
          data = _context2.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Post Fetched successfully'
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllPost(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllPost = getAllPost;
var updatePost = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return PostService.updatePost(req.params.id, req.body);
        case 3:
          data = _context3.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Post updated successfully'
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function updatePost(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updatePost = updatePost;
var deletePost = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return PostService.deletePost(req);
        case 3:
          data = _context4.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Post deleted successfully'
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function deletePost(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deletePost = deletePost;
var likePost = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return PostService.likePost(req.params.id, req.params.email);
        case 3:
          data = _context5.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Post Liked successfully'
          });
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function likePost(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
exports.likePost = likePost;
var numberOfLikes = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return PostService.numberOfLikes(req);
        case 3:
          data = _context6.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Number of Likes updated'
          });
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function numberOfLikes(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
exports.numberOfLikes = numberOfLikes;
var viewPost = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return PostService.viewPost(req.params.id, req.params.Email);
        case 3:
          data = _context7.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'view added successfully'
          });
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function viewPost(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

//findMyLikedPost
exports.viewPost = viewPost;
var findMyLikedPost = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return PostService.findMyLikedPost(req.params.id);
        case 3:
          data = _context8.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Fetched Liked post successfully'
          });
          _context8.next = 10;
          break;
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function findMyLikedPost(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();
exports.findMyLikedPost = findMyLikedPost;
var findMyPost = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return PostService.findMyPost(req.params.email);
        case 3:
          data = _context9.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Fetched my created post successfully'
          });
          _context9.next = 10;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function findMyPost(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();
exports.findMyPost = findMyPost;
var getPostById = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return PostService.getPostById(req);
        case 3:
          data = _context10.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Fetched my created post successfully'
          });
          _context10.next = 10;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          next(_context10.t0);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function getPostById(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

//findPostByText
exports.getPostById = getPostById;
var findPostByText = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return PostService.findPostByText(req.params.searchText);
        case 3:
          data = _context11.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Fetched my created post successfully'
          });
          _context11.next = 10;
          break;
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          next(_context11.t0);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function findPostByText(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();
exports.findPostByText = findPostByText;
var arrangeByLikesSortHighToLow = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return PostService.arrangeByLikesSortHighToLow();
        case 3:
          data = _context12.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Fetched my data high to low successfully'
          });
          _context12.next = 10;
          break;
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          next(_context12.t0);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function arrangeByLikesSortHighToLow(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();
exports.arrangeByLikesSortHighToLow = arrangeByLikesSortHighToLow;
var arrangeByLikesSortLowToHigh = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return PostService.arrangeByLikesSortLowToHigh();
        case 3:
          data = _context13.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: data,
            message: 'Fetched my data low to high successfully'
          });
          _context13.next = 10;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          next(_context13.t0);
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function arrangeByLikesSortLowToHigh(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();
exports.arrangeByLikesSortLowToHigh = arrangeByLikesSortLowToHigh;
var getAllCommentNewLogic = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return PostService.getAllCommentNewLogic(req.body);
        case 2:
          data = _context14.sent;
          console.log(data, "data================");
          res.status(_httpStatusCodes["default"].OK).json({
            data: data
          });
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getAllCommentNewLogic(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getAllCommentNewLogic = getAllCommentNewLogic;
var oneMoreLogic = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return PostService.oneMoreLogic(req.params.id, req.params.Author, req.body);
        case 2:
          data = _context15.sent;
          console.log(data, "data================1");
          res.status(_httpStatusCodes["default"].OK).json({
            data: data
          });
        case 5:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function oneMoreLogic(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();
exports.oneMoreLogic = oneMoreLogic;
var likeCommentPost = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return PostService.likeCommentPost(req.params.id, req.params.email);
        case 3:
          data = _context16.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Post Liked successfully'
          });
          _context16.next = 10;
          break;
        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](0);
          next(_context16.t0);
        case 10:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 7]]);
  }));
  return function likeCommentPost(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();
exports.likeCommentPost = likeCommentPost;
var findAllComment = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return PostService.findAllComment(req.params.id);
        case 3:
          data = _context17.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'All comments feched successfully'
          });
          _context17.next = 10;
          break;
        case 7:
          _context17.prev = 7;
          _context17.t0 = _context17["catch"](0);
          next(_context17.t0);
        case 10:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 7]]);
  }));
  return function findAllComment(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();
exports.findAllComment = findAllComment;
var deleteComment = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return PostService.deleteComment(req);
        case 3:
          data = _context18.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Deleted comment successfully'
          });
          _context18.next = 10;
          break;
        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](0);
          next(_context18.t0);
        case 10:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 7]]);
  }));
  return function deleteComment(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();
exports.deleteComment = deleteComment;
var senMailForComment = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return PostService.sendEmailFromComment(req.params.authorEmail, req.body.Comment, req.params.commentAuthor);
        case 3:
          data = _context19.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'send mail successfully'
          });
          _context19.next = 10;
          break;
        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](0);
          next(_context19.t0);
        case 10:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 7]]);
  }));
  return function senMailForComment(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

//author,commentId,body
exports.senMailForComment = senMailForComment;
var replyToComment = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return PostService.replyToComment(req.params.author, req.params.commentId, req.body, req.params.blogId);
        case 3:
          data = _context20.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'reply to comment'
          });
          _context20.next = 10;
          break;
        case 7:
          _context20.prev = 7;
          _context20.t0 = _context20["catch"](0);
          next(_context20.t0);
        case 10:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 7]]);
  }));
  return function replyToComment(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

//getAllReplies
exports.replyToComment = replyToComment;
var getAllReplies = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return PostService.getAllReplies();
        case 3:
          data = _context21.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'fetched all replies'
          });
          _context21.next = 10;
          break;
        case 7:
          _context21.prev = 7;
          _context21.t0 = _context21["catch"](0);
          next(_context21.t0);
        case 10:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 7]]);
  }));
  return function getAllReplies(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();
exports.getAllReplies = getAllReplies;
var deleteReplyComment = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return PostService.deleteReplyComment(req.params.id);
        case 3:
          data = _context22.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'deleted reply'
          });
          _context22.next = 10;
          break;
        case 7:
          _context22.prev = 7;
          _context22.t0 = _context22["catch"](0);
          next(_context22.t0);
        case 10:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 7]]);
  }));
  return function deleteReplyComment(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();
exports.deleteReplyComment = deleteReplyComment;
var getReplyToIndividual = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return PostService.getReplyToIndividual(req.params.id);
        case 3:
          data = _context23.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'fetched all replies'
          });
          _context23.next = 10;
          break;
        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          next(_context23.t0);
        case 10:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 7]]);
  }));
  return function getReplyToIndividual(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

//getReplyCommentNumber
exports.getReplyToIndividual = getReplyToIndividual;
var getReplyCommentNumber = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return PostService.getReplyCommentNumber(req.params.id);
        case 3:
          data = _context24.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'fetched all replies'
          });
          _context24.next = 10;
          break;
        case 7:
          _context24.prev = 7;
          _context24.t0 = _context24["catch"](0);
          next(_context24.t0);
        case 10:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 7]]);
  }));
  return function getReplyCommentNumber(_x70, _x71, _x72) {
    return _ref24.apply(this, arguments);
  };
}();
exports.getReplyCommentNumber = getReplyCommentNumber;
var getParticularComment = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return PostService.getParticularComment(req.params.id);
        case 3:
          data = _context25.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'fetched data'
          });
          _context25.next = 10;
          break;
        case 7:
          _context25.prev = 7;
          _context25.t0 = _context25["catch"](0);
          next(_context25.t0);
        case 10:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 7]]);
  }));
  return function getParticularComment(_x73, _x74, _x75) {
    return _ref25.apply(this, arguments);
  };
}();
exports.getParticularComment = getParticularComment;
var getParticularReplyComment = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return PostService.getParticularReplyComment(req.params.id);
        case 3:
          data = _context26.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'fetched data'
          });
          _context26.next = 10;
          break;
        case 7:
          _context26.prev = 7;
          _context26.t0 = _context26["catch"](0);
          next(_context26.t0);
        case 10:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 7]]);
  }));
  return function getParticularReplyComment(_x76, _x77, _x78) {
    return _ref26.apply(this, arguments);
  };
}();

//likeReplyOfComment
exports.getParticularReplyComment = getParticularReplyComment;
var likeReplyOfComment = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return PostService.likeReplyOfComment(req.params.id, req.params.email);
        case 3:
          data = _context27.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'fetched data'
          });
          _context27.next = 10;
          break;
        case 7:
          _context27.prev = 7;
          _context27.t0 = _context27["catch"](0);
          next(_context27.t0);
        case 10:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 7]]);
  }));
  return function likeReplyOfComment(_x79, _x80, _x81) {
    return _ref27.apply(this, arguments);
  };
}();
exports.likeReplyOfComment = likeReplyOfComment;