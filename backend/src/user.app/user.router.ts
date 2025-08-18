import { Router } from "express"
import { UserController } from "./user.controller"
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware"

const router = Router()

router.post("/login-or-register", UserController.loginOrRegister)

router.get('/get-user', authTokenMiddleware, UserController.getUser)

export default router
