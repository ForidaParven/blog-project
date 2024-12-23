import { Router } from "express";
import { adminController } from "./admin.controller";
import { blogControllerSchema } from "../blog/blog.controller";

const router = Router();

router.put("/users/:id/block",adminController.blockUser);
router.delete("/blogs/:id",blogControllerSchema.deleteBlog);

export const adminRouter = router;