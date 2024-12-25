import { Router } from "express";
import { adminController } from "./admin.controller";
import { blogControllerSchema } from "../blog/blog.controller";
import { isAuthenticated } from "../../../middleWare/middleWare";

const router = Router();

router.put("/users/:id/block",isAuthenticated, adminController.blockUser);
router.delete("/blogs/:id", isAuthenticated, blogControllerSchema.deleteBlog);

export const adminRouter = router;