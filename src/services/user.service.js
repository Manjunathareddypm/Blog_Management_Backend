import User from '../models/user.model';
import HttpStatus from 'http-status-codes';

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (body) => {
  const {  email, password,fullName } = body
    const data = await User.findOne({ email })
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



export const login = async (body) => {
  console.log(body.email,body.password);
  const email =  await body.email
  const password = await body.password
  const data = await User.findOne({ email })
  
  console.log(email,password);
  if (data) {
    const result = await bcrypt.compare(password, data.password)
    if (result) {
      const token = await jwt.sign({ Id: data._id, email: data.email }, process.env.SECRET_KEY)
      return token;
    } else {
      throw new Error('Invalid Password')
    }
  } else {
    throw new Error("Email not registered")
  }

}


export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};