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
var CLIENT_ID = '639717843604-ltq5f9p7c80e1p6420p57vd7t8jtfu8h.apps.googleusercontent.com';
var CLIENT_SECRET = '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';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//04DlDVOc9dp3bCgYIARAAGAQSNwF-L9IrZ8haq7F4WcEtkVoiK4O8ZvnyphrNvNnZ7LPOiGN4mMv3nccnRBZY8yr2aXKpi_q5fxs';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});
function sendEmail(_x, _x2, _x3, _x4) {
  return _sendEmail.apply(this, arguments);
}
function _sendEmail() {
  _sendEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(authorEmail, comment, commentAuthor, Title) {
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
              user: 'prathameshvardam321@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accesstoken
            }
          });
          mailOptions = {
            from: "".concat(commentAuthor),
            to: authorEmail,
            subject: "New comment added from ".concat(commentAuthor, " on Post ").concat(Title),
            text: 'Hellow from API',
            html: "<h3>".concat(comment, "</h3>")
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