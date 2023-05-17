import express from 'express';
import * as postController from '../controllers/post.controller';
import { userAuth } from '../middlewares/auth.middleware';
import * as ImageController from '../controllers/image.controller'
import { PostValidator } from '../validators/post.validator';

const router = express.Router();

router.post('/', PostValidator, userAuth, postController.createPost)

router.get("/", postController.getAllPost)

router.put('/editpost/:id', postController.updatePost)

router.delete('/deletePost/:id', postController.deletePost)

router.put('/:id/like/:email', userAuth, postController.likePost)

router.post('/:id/numberOfLike', userAuth, postController.numberOfLikes)

router.post('/:id/viewPost/:Email', postController.viewPost)

router.get('/findMyLikedPost/:id', postController.findMyLikedPost)

router.get('/findMyPost/:email', postController.findMyPost)

router.get('/getPostById/:id', userAuth, postController.getPostById)

router.get('/getAllPost/:searchText', userAuth, postController.findPostByText)

router.get('/arrangeByLikesSortHighToLow',postController.arrangeByLikesSortHighToLow)

router.get('/arrangeByLikesSortLowToHigh',postController.arrangeByLikesSortLowToHigh)

router.get('/:id/comments/', postController.getAllCommentNewLogic)

router.post('/comment/:id/:Author', postController.oneMoreLogic)

router.put('/:id/likeComment/:email', postController.likeCommentPost)

router.put('/:id/likeReplyOfComment/:email', postController.likeReplyOfComment)

router.get('/comment/:id', postController.findAllComment)

router.delete('/comment/:id', postController.deleteComment)

router.post("/sendEmail/:authorEmail/:commentAuthor",postController.senMailForComment)

router.post("/replyComment/:author/:commentId/:blogId",postController.replyToComment)

router.get("/getAllReply/",postController.getAllReplies)

router.delete("/deleteReply/:id",postController.deleteReplyComment)

router.get("/getIndividiualReply/:id",postController.getReplyToIndividual)

router.get("/getReplyToNumber/:id",postController.getReplyCommentNumber)

router.get("/getParticularComment/:id",postController.getParticularComment)

router.get("/getParticularComment/:id",postController.getParticularComment)

router.get("/getParticularReplyComment/:id",postController.getParticularReplyComment)



export default router;
