"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var nodemailer = require('nodemailer');
var _require = require('googleapis'),
  google = _require.google;
var CLIENT_ID = '686659781703-9vp0jkmrnms8hhio4gs4hfl8a8s2508b.apps.googleusercontent.com';
var CLIENT_SECRET = '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';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//04n0FpOcjGXXPCgYIARAAGAQSNwF-L9Ir9dLzOF1nPnqUru99mm0As4rXfZN3ZVkFZdk3RQQYgNOjolGkSAumuvRWHwx-lgUaN6c';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});
function sendEmail(_x, _x2, _x3) {
  return _sendEmail.apply(this, arguments);
}
function _sendEmail() {
  _sendEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(authorEmail, comment, commentAuthor) {
    var accesstoken, transport, mailOptions, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return oAuth2Client.getAccessToken();
        case 3:
          accesstoken = _context.sent;
          transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'mreddypm@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accesstoken
            }
          });
          mailOptions = {
            from: "".concat(commentAuthor),
            to: authorEmail,
            subject: "New comment added from ".concat(commentAuthor),
            text: 'Hellow from API',
            html: "<h1>".concat(comment, "</h1>")
          };
          _context.next = 8;
          return transport.sendMail(mailOptions);
        case 8:
          result = _context.sent;
          return _context.abrupt("return", result);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _sendEmail.apply(this, arguments);
}