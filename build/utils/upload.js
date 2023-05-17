"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _multerGridfsStorage = require("multer-gridfs-storage");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var storage = new _multerGridfsStorage.GridFsStorage({
  url: process.env.DATABASE,
  options: {
    useNewUrlParser: true
  },
  file: function file(request, _file) {
    var match = ["image/png", "image/jpg", "image/jpeg"];
    if (match.indexOf(_file.memeType) === -1) return "".concat(Date.now(), "-blog-").concat(_file.originalname);
    return {
      bucketName: "photos",
      filename: "".concat(Date.now(), "-blog-").concat(_file.originalname)
    };
  }
});
var _default = (0, _multer["default"])({
  storage: storage
});
exports["default"] = _default;