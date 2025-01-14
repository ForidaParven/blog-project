
import AppError from "../../errors/AppError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


 const registerUser = async (payload:IUser) => {
  const result = await User.create(payload);
  return result;
};

 const loginUser = async (payload: { email: string; password: string }) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload?.email }).select('+password');

  if (!user) {
    // throw new Error('This user is not found !')
    throw new AppError(401, 'This user is not found!');
  }


  
  //checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  )

  if (!isPasswordMatched) {
    // throw new Error('Wrong Password!!! Tell me who are you? 😈')
    throw new AppError(401, 'Invalid credentials. Please try again.');
  }

  //create token and sent to the  client
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
    id: user?.id,
  }

  const token = jwt.sign(jwtPayload, process.env.JWT_ACCESS_SECRET!, { expiresIn: '30d' });

  const verifiedUser = {name: user?.name, email:user?.email, role:user?.role}

  return {token, verifiedUser};
}




export const authServiceSchema = {
  registerUser,
  loginUser,
};
