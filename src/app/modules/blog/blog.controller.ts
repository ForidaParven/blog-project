
import { blogServiceSchema } from "./blog.service";
 import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";



 const createBlog =catchAsync(async (req: Request, res: Response) => {
        const body = req.body;
        const {id, role} = req.user;

        if(role === "admin"){
          res.status(403).json({
            success: false,
            message: "you are not allowed",
          })
        }

      const newBlog = await blogServiceSchema.createBlog(body, id)

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
        message: "Blog created successfully",
        data: {
          _id:newBlog.id,
          title:newBlog.title,
          content:newBlog.content,
          author:newBlog.author,
        },
    })
    
  });

  const getAllBlogs =catchAsync(async (req: Request, res: Response) => {
      const query = req.query;
      const blogs = await blogServiceSchema.getAllBlogs(query);

      const formattedBlogs = blogs.map((blog: any) => ({
        _id: blog._id,
        title: blog.title,
        content: blog.content,
        author: blog, 
      }));

      sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: "Blogs fetched successfully",
        data:formattedBlogs
      })
  });

  
  const updateBlog =catchAsync(async (req: Request, res: Response) => {
  
      const { id } = req.params;
      const updateData = req.body;
      const {id: userId, role} = req.user;

      const updatedBlog = await blogServiceSchema.updateBlog(
        id,
        userId,
        updateData,

      );
  
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: "Blogs updated successfully",
        data:updatedBlog
      })
  });
  

  const deleteBlog =catchAsync( async (req: Request, res: Response) => {
  
      const { id } = req.params;
      await blogServiceSchema.deleteBlog(id);
  
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: "Blogs deleted successfully",
        data:{}
      })
  });
  

  export const blogControllerSchema = 
  {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
  };






