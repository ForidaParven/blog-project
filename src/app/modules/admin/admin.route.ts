import { Router } from "express";
import { adminController } from "./admin.controller";
import { blogControllerSchema } from "../blog/blog.controller";
import { USER_ROLE } from "../user/user.constant";
import auth from "../../../middleWare/auth";

const router = Router();

router.put("/users/:id/block",auth(USER_ROLE.admin, USER_ROLE.user), adminController.blockUser);
router.delete("/blogs/:id", auth(USER_ROLE.admin, USER_ROLE.user), blogControllerSchema.deleteBlog);

export const adminRouter = router;