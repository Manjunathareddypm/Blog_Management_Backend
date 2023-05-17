import { Schema, model } from 'mongoose';
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);


export default model('Users', userSchema);