import { Router } from "express";
import validate from "../../../middleWare/validation.middleware";
import { authControllerSchema } from "./auth.controller";
import { userValidationSchema } from "../user/user.validation";
import { AuthValidationSchema } from "./auth.validation";

const router = Router();

router.post("/register", validate(userValidationSchema.registerValidation), authControllerSchema.register);
router.post("/login", validate(AuthValidationSchema.loginValidation), authControllerSchema.login);

export const authRouter = router;
