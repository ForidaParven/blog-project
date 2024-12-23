 import { blogServiceSchema } from "./blog.service";
 import { Request, Response } from "express";


const createBlog = async (req: Request, res: Response) => {
    try {
        const body = req.body; 
      const newBlog = await blogServiceSchema.createBlog(body);
      res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: {
          _id: newBlog.id,
          title: newBlog.title,
          content: newBlog.content,
          author: newBlog,
    }
      });
    } 
    catch (error: any) {
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


  const getAllBlogs = async (req: Request, res: Response) => {
    try {
      const query = req.query;
      const blogs = await blogServiceSchema.getAllBlogs(query);

      const formattedBlogs = blogs.map((blog: any) => ({
        _id: blog._id,
        title: blog.title,
        content: blog.content,
        author: blog, 
      }));
  
      res.status(200).json({
        success: true,
        message: "Blogs fetched successfully",
        statusCode:200,
        data:formattedBlogs
      });

      
    } catch (error: any) {
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

  
  const updateBlog = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const userId = req.user?.id || ""; 
      const role = req.user?.role || ""; 
      const updatedBlog = await blogServiceSchema.updateBlog(
        id,
        userId,
        updateData,
        role
      );
  
      res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog,
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
  

  const deleteBlog = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id || ""; 
      const role = req.user?.role || ""; 
      await blogServiceSchema.deleteBlog(id, userId, role);
  
      res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
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
  

  export const blogControllerSchema = 
  {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
  };






