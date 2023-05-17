"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = require("@hapi/joi");
var _mongoose = require("mongoose");
var finalCommentSchema = new _mongoose.Schema({
  parent: {
    type: String
  },
  blogId: {
    type: String
  },
  Comment: {
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
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('finalComment', finalCommentSchema);
exports["default"] = _default;