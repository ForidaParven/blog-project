import { Router } from "express";
 import { blogControllerSchema } from "./blog.controller";
import { isAuthenticated } from "../../../middleWare/middleWare";


const router = Router();

 router.get("/", blogControllerSchema.getAllBlogs);
 router.post("/",isAuthenticated, blogControllerSchema.createBlog);
 router.delete("/:id",isAuthenticated, blogControllerSchema.deleteBlog);
 router.put("/:id",isAuthenticated, blogControllerSchema.updateBlog);



export const blogRouter = router;
