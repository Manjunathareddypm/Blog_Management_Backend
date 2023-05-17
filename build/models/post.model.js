"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = require("@hapi/joi");
var _mongoose = require("mongoose");
var postSchema = new _mongoose.Schema({
  Title: {
    type: String,
    require: true
  },
  Description: {
    type: String,
    require: true
  },
  Email: {
    type: String
  },
  Likes: {
    type: [String]
  },
  date: {
    type: Date,
    "default": Date.now()
  },
  NumberOfLikes: {
    type: Number,
    "default": 0
  },
  Type: {
    type: String,
    "default": "Other"
  },
  Views: {
    type: [String]
  },
  Image: {
    type: String
  },
  data: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('UsersBlogManagementPost', postSchema);
exports["default"] = _default;