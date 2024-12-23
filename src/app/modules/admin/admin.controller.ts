
import { adminServiceSchema } from "./admin.service";
import { Request, Response } from 'express';


const blockUser = async (req: Request, res: Response) => {
        try {
            const userId = req.user?.id
           const user = await adminServiceSchema.blockUser(userId);
          res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'User blocked successfully',
          });
        }  catch (error: any) {
            res.status(400).json({
              success: false,
              message: error.message || "An unexpected error occurred.",
              statusCode: 400,
              error: {
                details: error.details || "No additional details available.",
              },
              stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
            });
          }
      }
    
const blogDelete = async (req: Request, res: Response) => {
     try {
          const { id } = req.params;
          const userId = req.user?.id || ""; 
          await adminServiceSchema.blogDelete(id, userId);
      
          res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            statusCode:200,
          });
        }  catch (error: any) {
          res.status(400).json({
            success: false,
            message: error.message || "An unexpected error occurred.",
            statusCode: 400,
            error: {
              details: error.details || "No additional details available.",
            },
            stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
          });
        }
      
  };

  export const adminController = {
    blockUser,blogDelete,
  }