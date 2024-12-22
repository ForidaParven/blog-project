import { Router } from "express";
import { isAuthenticated } from "../../../middleWare/middleWare";
import validate from "../../../middleWare/validation.middleware";
import { blogValidationSchema } from "./blog.validation";
import { blogControllerSchema } from "./blog.controller";


const router = Router();

router.post(
  "/",
  isAuthenticated,
  validate(blogValidationSchema.createBlogValidation),
  blogControllerSchema.createBlog
);

router.patch(
  "/:id",
  isAuthenticated,
  validate(blogValidationSchema.updateBlogValidation),
  blogControllerSchema.updateBlog
);

router.delete("/:id", isAuthenticated, blogControllerSchema.deleteBlog);

router.get("/", blogControllerSchema.getAllBlogs);

export const blogRouter = router;
