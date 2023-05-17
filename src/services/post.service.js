import postModel from '../models/post.model';
import { user } from '../middlewares/auth.middleware';
import { log } from 'winston';
import replycommentModel from '../models/replycomment.model';
import finalcommentModel from '../models/finalcomment.model';
import { sendEmail } from '../utils/email.util';

export const createPost = async (body) => {
    console.log(body,"Body");
    const data = await postModel.create(body)
    return data
}

export const getAllPost = async () => {
    const data = await postModel.find()
    return data
}

export const updatePost = async (_id, body) => {
    const data = await postModel.findByIdAndUpdate({ "_id": _id }, body, { new: true })
    return data
}

export const likePost = async (id, email) => {


    const data = await postModel.findById(id)

    const { Likes } = data
    let data1

    if (await Likes.includes(email)) {
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            {
                $pull: { Likes: email },

            },
            { new: true })
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            { NumberOfLikes: data1.Likes.length }, { new: true }
        )
    } else {
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            {
                $push: { Likes: email },

            },
            { new: true })
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            { NumberOfLikes: data1.Likes.length }, { new: true }
        )
    }
    return data1
}

export const numberOfLikes = async (body) => {
    const data = await postModel.findOne({ "_id": body.params.id })
    const length = await postModel.findByIdAndUpdate({ "_id": body.params.id },
        { NumberOfLikes: data.Likes.length }, { new: true }
    )
    return length
}

export const viewPost = async (id, Email) => {
    const data = await postModel.findOne({ "_id": id })
    let data1
    if (data.Views.includes(Email)) {

        console.log("Alreedy");
        return data
    }
    else {
        data1 = await postModel.findByIdAndUpdate({ "_id": id },
            { $push: { Views: Email } },
            { new: true })
        return data1

    }

}

export const deletePost = async (body) => {
    const data = await postModel.findOneAndDelete({ "_id": body.params.id })
    return data
}

export const findMyLikedPost = async (email) => {
    const getAllPost = await postModel.find()
    const myLikedData = getAllPost.filter((x) => x.Likes.includes(email))
    return myLikedData
}

export const findMyPost = async (email) => {
    const allPost = await postModel.find({
        Email:email
    })
   // const myPost = allPost.filter((x) => x.Email == email)
    return allPost
}

export const getPostById = async (req) => {
    const post = await postModel.find({ "_id": req.params.id })
    return post
}

export const findPostByText = async (searchText) => {
    const data = await postModel.find({
        $or: [
            {
                Title: { $regex: searchText, $options: 'i' }
            },
            {
                Description: { $regex: searchText, $options: 'i' }
            },
            {
                Email: { $regex: searchText, $options: 'i' }
            }
        ]
    })
    return data

}

export const arrangeByLikesSortHighToLow = async () => {
    const allPost = await postModel.find().sort({ NumberOfLikes: -1 })
    return allPost
}

export const arrangeByLikesSortLowToHigh = async () => {
    const allPost = await postModel.find().sort({ NumberOfLikes: 1 })
    return allPost
}

export const oneMoreLogic = async (id, author, body) => {

    let created = await finalcommentModel.create({
        Author: author,
        blogId: id,
        Comment: body.Comment,
        likes: []
    });
    return created
}

export const replyToComment = async (author, commentId, body, blogId) => {

    const data = await replycommentModel.create({
        Author: author,
        CommentParentId: commentId,
        Comment1: body.Comment1,
        blogId: blogId
    })

    return data

}




export const likeCommentPost = async (id, email) => {
    const data = await finalcommentModel.findById(id);
    const { Likes } = data;
    let data1;

    if (await Likes.includes(email)) {
        data1 = await finalcommentModel.findByIdAndUpdate(
            { _id: id },
            {
                $pull: { Likes: email }
            },
            { new: true }
        );
        data1 = await finalcommentModel.findByIdAndUpdate(
            { _id: id },
            { NumberOfLikes: data1.Likes.length },
            { new: true }
        );
    } else {
        data1 = await finalcommentModel.findByIdAndUpdate(
            { _id: id },
            {
                $push: { Likes: email }
            },
            { new: true }
        );
        data1 = await finalcommentModel.findByIdAndUpdate(
            { _id: id },
            { NumberOfLikes: data1.Likes.length },
            { new: true }
        );
    }

    return data1;
};


export const likeReplyOfComment = async(id,email) =>{
    const data = await replycommentModel.findById(id)
    const { Likes }  = data;
    console.log(Likes);
    let data1;
    if (await Likes.includes(email)) {
        data1 = await replycommentModel.findByIdAndUpdate(
            { _id: id },
            {
                $pull: { Likes: email }
            },
            { new: true }
        );
        data1 = await replycommentModel.findByIdAndUpdate(
            { _id: id },
            { NumberOfLikes: data1.Likes.length },
            { new: true }
        );
    } else {
        data1 = await replycommentModel.findByIdAndUpdate(
            { _id: id },
            {
                $push: { Likes: email }
            },
            { new: true }
        );
        data1 = await replycommentModel.findByIdAndUpdate(
            { _id: id },
            { NumberOfLikes: data1.Likes.length },
            { new: true }
        );
    }

    return data1;
}


export const findAllComment = async (id) => {
    const allComments = await finalcommentModel.find({ blogId: id })
    return allComments
}

export const deleteComment = async (req) => {
    let parentId = req.params.id;
    const deletedComment = await finalcommentModel.findOneAndDelete({ "_id": parentId })
    return deletedComment
}
//authorEmail,comment,commentAuthor
export const sendEmailFromComment = async (authorEmail, Comment, commentAuthor) => {

    const data = await sendEmail(authorEmail, Comment, commentAuthor)
    return data
}

export const getAllReplies = async () => {
    const data = await replycommentModel.find()
    return data
}

export const deleteReplyComment = async (id) => {
    const data = await replycommentModel.findOneAndDelete({ "_id": id })
    return data
}

export const getReplyCommentNumber = async (blogId) => {
    const data = await replycommentModel.find({ "blogId": blogId })
    return data
}

export const getReplyToIndividual = async (id) => {
    const data = await replycommentModel.find({ "CommentParentId": id })
    return data
}

export const getParticularComment = async(id) =>{
const data = await finalcommentModel.find({"_id":id})
return data
}

export const getParticularReplyComment = async(id) =>{
    const data = await replycommentModel.find({"_id":id})
    return data 
}

