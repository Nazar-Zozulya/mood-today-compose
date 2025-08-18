import { Router } from "express"
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware"
import { MoodController } from "./mood.controller"

const router = Router()

router.get('/history', authTokenMiddleware, MoodController.getMoodHistory)
router.post('/create', authTokenMiddleware, MoodController.createMood)

export default router
