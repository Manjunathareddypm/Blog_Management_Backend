"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var postController = _interopRequireWildcard(require("../controllers/post.controller"));
var _auth = require("../middlewares/auth.middleware");
var _post2 = require("../validators/post.validator");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();
router.post('/', _auth.userAuth, _post2.PostValidator, postController.createPost);
router.get("/", postController.getAllPost);
router.put('/editpost/:id', postController.updatePost);
router["delete"]('/deletePost/:id', postController.deletePost);
router.put('/:id/like/:email', _auth.userAuth, postController.likePost);
router.post('/:id/numberOfLike', _auth.userAuth, postController.numberOfLikes);
router.post('/:id/viewPost/:Email', postController.viewPost);
router.get('/findMyLikedPost/:id', postController.findMyLikedPost);
router.get('/findMyPost/:id', postController.findMyPost);
router.get('/getPostById/:id', _auth.userAuth, postController.getPostById);
router.get('/getAllPost/:searchText', _auth.userAuth, postController.findPostByText);
router.get('/arrangeByLikesSortHighToLow', postController.arrangeByLikesSortHighToLow);
router.get('/arrangeByLikesSortLowToHigh', postController.arrangeByLikesSortLowToHigh);
router.get('/:id/comments/', postController.getAllCommentNewLogic);
router.post('/comment/:id/:Author', postController.oneMoreLogic);
router.put('/:id/likeComment/:email', postController.likeCommentPost);
router.put('/:id/likeReplyOfComment/:email', postController.likeReplyOfComment);
router.get('/comment/:id', postController.findAllComment);
router["delete"]('/comment/:id', postController.deleteComment);
router.post("/sendEmail/:authorEmail/:commentAuthor/:Title", postController.senMailForComment);
router.post("/replyComment/:author/:commentId/:blogId", postController.replyToComment);
router.get("/getAllReply/", postController.getAllReplies);
router["delete"]("/deleteReply/:id", postController.deleteReplyComment);
router.get("/getIndividiualReply/:id", postController.getReplyToIndividual);
router.get("/getReplyToNumber/:id", postController.getReplyCommentNumber);
router.get("/getParticularComment/:id", postController.getParticularComment);
router.get("/getParticularComment/:id", postController.getParticularComment);
router.get("/getParticularReplyComment/:id", postController.getParticularReplyComment);
var _default = router;
exports["default"] = _default;