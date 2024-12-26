
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { adminServiceSchema } from "./admin.service";
import { Request, Response } from 'express';


const blockUser =catchAsync(async (req: Request, res: Response) => {
            const userId = req.params.id;
            console.log(userId)
           const user = await adminServiceSchema.blockUser(userId);


           sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'User blocked successfully',
            data: user,
          })
      });
    
const blogDelete =catchAsync(async (req: Request, res: Response) => {
      
          const blogId = req.params.id; 
          await adminServiceSchema.blogDelete(blogId);
      
          sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'User deleted successfully',
            data: {}
          })
      
  });

  export const adminController = {
    blockUser,blogDelete,
  }