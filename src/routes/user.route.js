import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';



const router = express.Router();


//route to create a new user
router.post('/', newUserValidator, userController.register);
//route to  login
router.post('/login', userController.login)

router.get('/', userController.getAllUsers)


export default router;