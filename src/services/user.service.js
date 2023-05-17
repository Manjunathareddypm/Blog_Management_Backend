import User from '../models/user.model';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from '../utils/email.util';
import logger, { logStream } from '../config/logger';
import finalcomment from '../models/finalcomment.model';

export const register = async (body) => {
  console.log("Hey Jeth");
  const {  email, password,fullName } = body
    const data = await User.findOne({ email })
    console.log(data, );
    if (data === null) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const data = await User.create({
          fullName,
          email,
          password: hashedPassword
      })
      return data;
  } else   {
      throw new Error("Email already registered")
  }
}

export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

export const login = async (body) => {
  const { email, password } = body
  const data = await User.findOne({ email })
  const result = await bcrypt.compare(password, data.password)
  if (data) {
    if (result) {
      const token = await jwt.sign({ Id: data._id, email: data.email }, process.env.SECRET_KEY)
      return token;
    } else {
      throw new Error('Wrong credentials')
    }
  } else {
    throw new Error("Details not found")
  }
}

