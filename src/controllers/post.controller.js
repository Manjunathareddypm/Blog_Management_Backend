import HttpStatus from 'http-status-codes';
import * as PostService from '../services/post.service'

export const createPost = async (req, res, next) => {
  try {
    const data = await PostService.createPost(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Post created successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPost = async ( req, res, next) => {
  try {
    const data = await PostService.getAllPost();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Post Fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const data = await PostService.updatePost(req.params.id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Post updated successfully'
    });
  } catch (error) {
    next(error);
  }
};



export const deletePost = async (req, res, next) => {
  try {
    const data = await PostService.deletePost(req)
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    next(error)
  }
}


export const likePost = async (req, res, next) => {
  try {
    const data = await PostService.likePost(req.params.id, req.params.email)
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Post Liked successfully'
    });
  } catch (error) {
    next(error)
  }
}



export const numberOfLikes = async (req, res, next) => {
  try {
    const data = await PostService.numberOfLikes(req)
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Number of Likes updated'
    });
  } catch (error) {
    next(error)
  }
}

export const viewPost = async (req, res, next) => {
  try {
    const data = await PostService.viewPost(req.params.id, req.params.Email)
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'view added successfully'
    });
  } catch (error) {
    next(error)
  }
}



//findMyLikedPost
export const findMyLikedPost = async (req, res, next) => {
  try {
    const data = await PostService.findMyLikedPost(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched Liked post successfully'
    });
  } catch (error) {
    next(error)
  }
}

export const findMyPost = async (req, res, next) => {
  try {
    const data = await PostService.findMyPost(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched my created post successfully'
    });
  } catch (error) {
    next(error)
  }
}

export const getPostById = async (req, res, next) => {
  try {
    const data = await PostService.getPostById(req)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched my created post successfully'
    });
  } catch (error) {
    next(error)
  }
}

//findPostByText
export const findPostByText = async (req, res, next) => {
  try {
    const data = await PostService.findPostByText(req.params.searchText)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched my created post successfully'
    });
  } catch (error) {
    next(error)
  }
}

export const arrangeByLikesSortHighToLow = async (req, res, next) => {
  try {
    const data = await PostService.arrangeByLikesSortHighToLow()
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched my data high to low successfully'
    });
  } catch (error) {
    next(error)
  }
}

export const arrangeByLikesSortLowToHigh = async (req, res, next) => {
  try {
    const data = await PostService.arrangeByLikesSortLowToHigh()
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched my data low to high successfully'
    });
  } catch (error) {
    next(error)
  }
}

export const getAllCommentNewLogic = async (req, res, next) => {
  const data = await PostService.getAllCommentNewLogic(req.body);
  res.status(HttpStatus.OK).json({
    data: data
  });
};


export const oneMoreLogic = async (req, res, next) => {
  const data = await PostService.oneMoreLogic(req.params.id, req.params.Author, req.body);
  res.status(HttpStatus.OK).json({
    data: data
  });
};



export const likeCommentPost = async (req, res, next) => {
  try {
    const data = await PostService.likeCommentPost(req.params.id, req.params.email);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Post Liked successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const findAllComment = async (req, res, next) => {
  try {
    const data = await PostService.findAllComment(req.params.id);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'All comments feched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const data = await PostService.deleteComment(req);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Deleted comment successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const senMailForComment = async (req, res, next) => {
  try {
    const data = await PostService.sendEmailFromComment(req.params.authorEmail, req.body.Comment, req.params.commentAuthor, req.params.Title)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'send mail successfully'
    });
  } catch (error) {
    next(error);
  }
}

//author,commentId,body
export const replyToComment = async (req, res, next) => {
  try {
    const data = await PostService.replyToComment(req.params.author, req.params.commentId, req.body, req.params.blogId)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'reply to comment'
    });
  } catch (error) {
    next(error);
  }
}

//getAllReplies
export const getAllReplies = async (req, res, next) => {
  try {
    const data = await PostService.getAllReplies()
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched all replies'
    });
  } catch (error) {
    next(error);
  }
}

export const deleteReplyComment = async (req, res, next) => {
  try {
    const data = await PostService.deleteReplyComment(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'deleted reply'
    });
  } catch (error) {
    next(error);
  }
}

export const getReplyToIndividual = async (req, res, next) => {
  try {
    const data = await PostService.getReplyToIndividual(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched all replies'
    });
  } catch (error) {
    next(error);
  }
}

//getReplyCommentNumber
export const getReplyCommentNumber = async (req, res, next) => {
  try {
    const data = await PostService.getReplyCommentNumber(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched all replies'
    });
  } catch (error) {
    next(error);
  }
}

export const getParticularComment = async (req, res, next) => {
  try {
    const data = await PostService.getParticularComment(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched data'
    });
  } catch (error) {
    next(error);
  }
}

export const getParticularReplyComment = async (req, res, next) => {
  try {
    const data = await PostService.getParticularReplyComment(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched data'
    });
  } catch (error) {
    next(error);
  }
}

//likeReplyOfComment
export const likeReplyOfComment = async (req, res, next) => {
  try {
    const data = await PostService.likeReplyOfComment(req.params.id,req.params.email)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched data'
    });
  } catch (error) {
    next(error);
  }
}