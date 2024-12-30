import { Router } from "express";
 import { blogControllerSchema } from "./blog.controller";
import auth from "../../../middleWare/auth";
import { USER_ROLE } from "../user/user.constant";


const router = Router();

 router.get("/", blogControllerSchema.getAllBlogs);
 router.post("/",auth(USER_ROLE.admin, USER_ROLE.user), blogControllerSchema.createBlog);
 router.delete("/:id",auth(USER_ROLE.admin, USER_ROLE.user), blogControllerSchema.deleteBlog);
 router.put("/:id",auth(USER_ROLE.admin, USER_ROLE.user), blogControllerSchema.updateBlog);



export const blogRouter = router;
