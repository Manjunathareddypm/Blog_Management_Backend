"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewPost = exports.updatePost = exports.sendEmailFromComment = exports.replyToComment = exports.oneMoreLogic = exports.numberOfLikes = exports.likeReplyOfComment = exports.likePost = exports.likeCommentPost = exports.getReplyToIndividual = exports.getReplyCommentNumber = exports.getPostById = exports.getParticularReplyComment = exports.getParticularComment = exports.getAllReplies = exports.getAllPost = exports.findPostByText = exports.findMyPost = exports.findMyLikedPost = exports.findAllComment = exports.deleteReplyComment = exports.deletePost = exports.deleteComment = exports.createPost = exports.arrangeByLikesSortLowToHigh = exports.arrangeByLikesSortHighToLow = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _post = _interopRequireDefault(require("../models/post.model"));
var _auth = require("../middlewares/auth.middleware");
var _winston = require("winston");
var _replycomment = _interopRequireDefault(require("../models/replycomment.model"));
var _finalcomment = _interopRequireDefault(require("../models/finalcomment.model"));
var _email = require("../utils/email.util");
var createPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(body, "Body");
          _context.next = 3;
          return _post["default"].create(body);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createPost(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.createPost = createPost;
var getAllPost = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _post["default"].find();
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getAllPost() {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllPost = getAllPost;
var updatePost = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _post["default"].findByIdAndUpdate({
            "_id": _id
          }, body, {
            "new": true
          });
        case 2:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function updatePost(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updatePost = updatePost;
var likePost = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, email) {
    var data, Likes, data1;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _post["default"].findById(id);
        case 2:
          data = _context4.sent;
          Likes = data.Likes;
          _context4.next = 6;
          return Likes.includes(email);
        case 6:
          if (!_context4.sent) {
            _context4.next = 15;
            break;
          }
          _context4.next = 9;
          return _post["default"].findByIdAndUpdate({
            "_id": id
          }, {
            $pull: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 9:
          data1 = _context4.sent;
          _context4.next = 12;
          return _post["default"].findByIdAndUpdate({
            "_id": id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 12:
          data1 = _context4.sent;
          _context4.next = 21;
          break;
        case 15:
          _context4.next = 17;
          return _post["default"].findByIdAndUpdate({
            "_id": id
          }, {
            $push: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 17:
          data1 = _context4.sent;
          _context4.next = 20;
          return _post["default"].findByIdAndUpdate({
            "_id": id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 20:
          data1 = _context4.sent;
        case 21:
          return _context4.abrupt("return", data1);
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function likePost(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
exports.likePost = likePost;
var numberOfLikes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
    var data, length;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _post["default"].findOne({
            "_id": body.params.id
          });
        case 2:
          data = _context5.sent;
          _context5.next = 5;
          return _post["default"].findByIdAndUpdate({
            "_id": body.params.id
          }, {
            NumberOfLikes: data.Likes.length
          }, {
            "new": true
          });
        case 5:
          length = _context5.sent;
          return _context5.abrupt("return", length);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function numberOfLikes(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
exports.numberOfLikes = numberOfLikes;
var viewPost = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, Email) {
    var data, data1;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _post["default"].findOne({
            "_id": id
          });
        case 2:
          data = _context6.sent;
          if (!data.Views.includes(Email)) {
            _context6.next = 8;
            break;
          }
          console.log("Alreedy");
          return _context6.abrupt("return", data);
        case 8:
          _context6.next = 10;
          return _post["default"].findByIdAndUpdate({
            "_id": id
          }, {
            $push: {
              Views: Email
            }
          }, {
            "new": true
          });
        case 10:
          data1 = _context6.sent;
          return _context6.abrupt("return", data1);
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function viewPost(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
exports.viewPost = viewPost;
var deletePost = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(body) {
    var data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _post["default"].findOneAndDelete({
            "_id": body.params.id
          });
        case 2:
          data = _context7.sent;
          return _context7.abrupt("return", data);
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deletePost(_x9) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deletePost = deletePost;
var findMyLikedPost = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(email) {
    var getAllPost, myLikedData;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _post["default"].find();
        case 2:
          getAllPost = _context8.sent;
          myLikedData = getAllPost.filter(function (x) {
            return x.Likes.includes(email);
          });
          return _context8.abrupt("return", myLikedData);
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function findMyLikedPost(_x10) {
    return _ref8.apply(this, arguments);
  };
}();
exports.findMyLikedPost = findMyLikedPost;
var findMyPost = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(email) {
    var allPost, myPost;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _post["default"].find();
        case 2:
          allPost = _context9.sent;
          myPost = allPost.filter(function (x) {
            return x.Email == email;
          });
          return _context9.abrupt("return", myPost);
        case 5:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function findMyPost(_x11) {
    return _ref9.apply(this, arguments);
  };
}();
exports.findMyPost = findMyPost;
var getPostById = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req) {
    var post;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return _post["default"].find({
            "_id": req.params.id
          });
        case 2:
          post = _context10.sent;
          return _context10.abrupt("return", post);
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getPostById(_x12) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getPostById = getPostById;
var findPostByText = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(searchText) {
    var data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return _post["default"].find({
            $or: [{
              Title: {
                $regex: searchText,
                $options: 'i'
              }
            }, {
              Description: {
                $regex: searchText,
                $options: 'i'
              }
            }, {
              Email: {
                $regex: searchText,
                $options: 'i'
              }
            }]
          });
        case 2:
          data = _context11.sent;
          return _context11.abrupt("return", data);
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function findPostByText(_x13) {
    return _ref11.apply(this, arguments);
  };
}();
exports.findPostByText = findPostByText;
var arrangeByLikesSortHighToLow = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
    var allPost;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return _post["default"].find().sort({
            NumberOfLikes: -1
          });
        case 2:
          allPost = _context12.sent;
          return _context12.abrupt("return", allPost);
        case 4:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function arrangeByLikesSortHighToLow() {
    return _ref12.apply(this, arguments);
  };
}();
exports.arrangeByLikesSortHighToLow = arrangeByLikesSortHighToLow;
var arrangeByLikesSortLowToHigh = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
    var allPost;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return _post["default"].find().sort({
            NumberOfLikes: 1
          });
        case 2:
          allPost = _context13.sent;
          return _context13.abrupt("return", allPost);
        case 4:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function arrangeByLikesSortLowToHigh() {
    return _ref13.apply(this, arguments);
  };
}();
exports.arrangeByLikesSortLowToHigh = arrangeByLikesSortLowToHigh;
var oneMoreLogic = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id, author, body) {
    var created;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return _finalcomment["default"].create({
            Author: author,
            blogId: id,
            Comment: body.Comment,
            likes: []
          });
        case 2:
          created = _context14.sent;
          return _context14.abrupt("return", created);
        case 4:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function oneMoreLogic(_x14, _x15, _x16) {
    return _ref14.apply(this, arguments);
  };
}();
exports.oneMoreLogic = oneMoreLogic;
var replyToComment = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(author, commentId, body, blogId) {
    var data;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return _replycomment["default"].create({
            Author: author,
            CommentParentId: commentId,
            Comment1: body.Comment1,
            blogId: blogId
          });
        case 2:
          data = _context15.sent;
          return _context15.abrupt("return", data);
        case 4:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function replyToComment(_x17, _x18, _x19, _x20) {
    return _ref15.apply(this, arguments);
  };
}();
exports.replyToComment = replyToComment;
var likeCommentPost = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(id, email) {
    var data, Likes, data1;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return _finalcomment["default"].findById(id);
        case 2:
          data = _context16.sent;
          Likes = data.Likes;
          _context16.next = 6;
          return Likes.includes(email);
        case 6:
          if (!_context16.sent) {
            _context16.next = 15;
            break;
          }
          _context16.next = 9;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            $pull: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 9:
          data1 = _context16.sent;
          _context16.next = 12;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 12:
          data1 = _context16.sent;
          _context16.next = 21;
          break;
        case 15:
          _context16.next = 17;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            $push: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 17:
          data1 = _context16.sent;
          _context16.next = 20;
          return _finalcomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 20:
          data1 = _context16.sent;
        case 21:
          return _context16.abrupt("return", data1);
        case 22:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function likeCommentPost(_x21, _x22) {
    return _ref16.apply(this, arguments);
  };
}();
exports.likeCommentPost = likeCommentPost;
var likeReplyOfComment = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(id, email) {
    var data, Likes, data1;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return _replycomment["default"].findById(id);
        case 2:
          data = _context17.sent;
          Likes = data.Likes;
          console.log(Likes);
          _context17.next = 7;
          return Likes.includes(email);
        case 7:
          if (!_context17.sent) {
            _context17.next = 16;
            break;
          }
          _context17.next = 10;
          return _replycomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            $pull: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 10:
          data1 = _context17.sent;
          _context17.next = 13;
          return _replycomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 13:
          data1 = _context17.sent;
          _context17.next = 22;
          break;
        case 16:
          _context17.next = 18;
          return _replycomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            $push: {
              Likes: email
            }
          }, {
            "new": true
          });
        case 18:
          data1 = _context17.sent;
          _context17.next = 21;
          return _replycomment["default"].findByIdAndUpdate({
            _id: id
          }, {
            NumberOfLikes: data1.Likes.length
          }, {
            "new": true
          });
        case 21:
          data1 = _context17.sent;
        case 22:
          return _context17.abrupt("return", data1);
        case 23:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function likeReplyOfComment(_x23, _x24) {
    return _ref17.apply(this, arguments);
  };
}();
exports.likeReplyOfComment = likeReplyOfComment;
var findAllComment = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(id) {
    var allComments;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return _finalcomment["default"].find({
            blogId: id
          });
        case 2:
          allComments = _context18.sent;
          return _context18.abrupt("return", allComments);
        case 4:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function findAllComment(_x25) {
    return _ref18.apply(this, arguments);
  };
}();
exports.findAllComment = findAllComment;
var deleteComment = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req) {
    var parentId, deletedComment;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          parentId = req.params.id;
          _context19.next = 3;
          return _finalcomment["default"].findOneAndDelete({
            "_id": parentId
          });
        case 3:
          deletedComment = _context19.sent;
          return _context19.abrupt("return", deletedComment);
        case 5:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function deleteComment(_x26) {
    return _ref19.apply(this, arguments);
  };
}();
//authorEmail,comment,commentAuthor
exports.deleteComment = deleteComment;
var sendEmailFromComment = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(authorEmail, Comment, commentAuthor, Title) {
    var data;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _email.sendEmail)(authorEmail, Comment, commentAuthor, Title);
        case 2:
          data = _context20.sent;
          return _context20.abrupt("return", data);
        case 4:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function sendEmailFromComment(_x27, _x28, _x29, _x30) {
    return _ref20.apply(this, arguments);
  };
}();
exports.sendEmailFromComment = sendEmailFromComment;
var getAllReplies = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21() {
    var data;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return _replycomment["default"].find();
        case 2:
          data = _context21.sent;
          return _context21.abrupt("return", data);
        case 4:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function getAllReplies() {
    return _ref21.apply(this, arguments);
  };
}();
exports.getAllReplies = getAllReplies;
var deleteReplyComment = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(id) {
    var data;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return _replycomment["default"].findOneAndDelete({
            "_id": id
          });
        case 2:
          data = _context22.sent;
          return _context22.abrupt("return", data);
        case 4:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function deleteReplyComment(_x31) {
    return _ref22.apply(this, arguments);
  };
}();
exports.deleteReplyComment = deleteReplyComment;
var getReplyCommentNumber = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(blogId) {
    var data;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return _replycomment["default"].find({
            "blogId": blogId
          });
        case 2:
          data = _context23.sent;
          return _context23.abrupt("return", data);
        case 4:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function getReplyCommentNumber(_x32) {
    return _ref23.apply(this, arguments);
  };
}();
exports.getReplyCommentNumber = getReplyCommentNumber;
var getReplyToIndividual = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(id) {
    var data;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return _replycomment["default"].find({
            "CommentParentId": id
          });
        case 2:
          data = _context24.sent;
          return _context24.abrupt("return", data);
        case 4:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function getReplyToIndividual(_x33) {
    return _ref24.apply(this, arguments);
  };
}();
exports.getReplyToIndividual = getReplyToIndividual;
var getParticularComment = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(id) {
    var data;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return _finalcomment["default"].find({
            "_id": id
          });
        case 2:
          data = _context25.sent;
          return _context25.abrupt("return", data);
        case 4:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function getParticularComment(_x34) {
    return _ref25.apply(this, arguments);
  };
}();
exports.getParticularComment = getParticularComment;
var getParticularReplyComment = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(id) {
    var data;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return _replycomment["default"].find({
            "_id": id
          });
        case 2:
          data = _context26.sent;
          return _context26.abrupt("return", data);
        case 4:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function getParticularReplyComment(_x35) {
    return _ref26.apply(this, arguments);
  };
}();
exports.getParticularReplyComment = getParticularReplyComment;