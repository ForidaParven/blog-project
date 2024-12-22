import { Router } from "express"
import validate from "../../../middleWare/validation.middleware"
import { userValidationSchema } from "./user.validation"
import { userController } from "./user.controller"
import { USER_ROLE } from "./user.constant"
import auth from "../../../middleWare/auth"


const userRouter = Router()

userRouter.post('/create-admin', validate(userValidationSchema.loginValidation),userController.createUser)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put('/:userId', userController.updateUser)
userRouter.delete('/:userId', userController.deleteUser)
userRouter.get('/',auth(USER_ROLE.admin, USER_ROLE.user), userController.getAllUser)

export default userRouter;