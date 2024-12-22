
import mongoose, { Schema, model } from 'mongoose';
import { IAuth } from './auth.interface';

const AuthSchema = new Schema<IAuth>(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
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

export const Auth = mongoose.model<IAuth>("Auth", AuthSchema);

