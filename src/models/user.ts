import mongoose from 'mongoose';
import { User, UserSignUp, Identity } from '../interfaces/user';

const userSchema = new mongoose.Schema<User>({
  courseList: { required: false, type: [String] },
});

const schema = new mongoose.Schema<UserSignUp>({
  name: { required: true, type: String },
  id: { required: true, type: String },
  password: { required: true, type: String },
  identity: {
    requried: true,
    type: String,
    enum: Identity,
    default: Identity.Student,
  },
  personID: { required: true, type: String },
});

const UserModel = mongoose.model<UserSignUp>('User', schema);
