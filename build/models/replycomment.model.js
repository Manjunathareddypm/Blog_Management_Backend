"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = require("@hapi/joi");
var _mongoose = require("mongoose");
var finalCommentSchema = new _mongoose.Schema({
  Comment1: {
    type: String
  },
  Likes: {
    type: [String]
  },
  NumberOfLikes: {
    type: Number,
    "default": 0
  },
  Author: {
    type: String
  },
  CommentParentId: {
    type: String,
    "default": null
  },
  blogId: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('replycomment', finalCommentSchema);
exports["default"] = _default;