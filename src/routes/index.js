import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import postRoute from './post.route'

const routes = () => {
  
  router.use('/users', userRoute);

  router.use('/post',postRoute);
  
  return router;
};

export default routes;
