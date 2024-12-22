import { Request, Response } from "express";
import { authServiceSchema } from "./auth.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { StatusCodes } from 'http-status-codes';


const register = catchAsync(async (req: Request, res: Response) => {
 const result = await authServiceSchema.registerUser(req.body);

 sendResponse(res, {
  statusCode: StatusCodes.CREATED,
  status: true,
  message: "User registered successfully",
  data: {
    name: result.name,
    email: result.email,
    _id: result.id,
  }
 })
});

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await authServiceSchema.loginUser(req.body);

  sendResponse(res, {
   statusCode: StatusCodes.CREATED,
   status: true,
   message: "User logged in successfully",
   token: result.token,
   data: result.verifiedUser,
  })
 });


export const authControllerSchema = {register, login}
