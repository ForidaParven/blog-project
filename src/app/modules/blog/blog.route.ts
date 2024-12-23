import { Router } from "express";
 import { blogControllerSchema } from "./blog.controller";


const router = Router();

 router.get("/", blogControllerSchema.getAllBlogs);
 router.post("/", blogControllerSchema.createBlog);
 router.delete("/:id", blogControllerSchema.deleteBlog);
 router.put("/:id", blogControllerSchema.updateBlog);



export const blogRouter = router;
