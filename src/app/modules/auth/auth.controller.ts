import { Request, Response } from "express";
import { authServiceSchema } from "./auth.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { StatusCodes } from 'http-status-codes';


const register = catchAsync(async (req: Request, res: Response) => {

 const result = await authServiceSchema.registerUser(req.body);

 sendResponse(res, {
   success: true,
   message: "User registered successfully",
   statusCode: StatusCodes.CREATED,
  data: {
    _id: result.id,
    name: result.name,
    email: result.email,
  }
 })
});

const login = catchAsync(async (req: Request, res: Response) => {

  // const { email, password } = req.body;

  // if (!email || !password) {
  //   throw new AppError('Email and password are required', 400);
  // }
  const result = await authServiceSchema.loginUser(req.body);

  sendResponse(res, {
   statusCode: StatusCodes.OK,
   success: true,
   message: "Login successful",
   data:{
    token:result.token
   },
  })
 });


export const authControllerSchema = {register, login}
