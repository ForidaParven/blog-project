import { blogServiceSchema } from "./blog.service";
import { Request, Response } from "express";


const createBlog = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id; 
      const blogData = { ...req.body, author: userId };
      const newBlog = await blogServiceSchema.createBlog(blogData);
      res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: newBlog,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
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
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
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
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  

  const getAllBlogs = async (req: Request, res: Response) => {
    try {
      const query = req.query;
      const blogs = await blogServiceSchema.getAllBlogs(query);
  
      res.status(200).json({
        success: true,
        message: "Blogs fetched successfully",
        data: blogs,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  
   const blockUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params; 
      const blockedUser = await blogServiceSchema.blockUser(userId);
  
      res.status(200).json({
        success: true,
        message: "User blocked successfully",
        data: blockedUser,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  export const blogControllerSchema = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    blockUser,
  };