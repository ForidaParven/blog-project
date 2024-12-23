
import mongoose, { Schema, model } from 'mongoose';
import { ILoginUser } from './auth.interface';

const AuthSchema = new Schema<ILoginUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  { timestamps: true }
);

export const Auth = mongoose.model<ILoginUser>("Auth", AuthSchema);

