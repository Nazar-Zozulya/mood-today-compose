import { UserService } from "../user.app/user.service"
import { MoodService } from "./mood.service"
import { MoodControllerTypes } from "./mood.type"

export const MoodController: MoodControllerTypes = {
	getMoodHistory: async (req, res) => {
		const id = +res.locals.userId

		const result = await MoodService.getMoodHistory(id)

		res.json(result)
	},

	createMood: async (req, res) => {
		const id = +res.locals.userId
		const { mood } = req.body

        console.log(new Date())

		const result = await MoodService.createMood({
			userId: id,
			mood,
			answeredAt: new Date(),
		})

		res.json(result)
	},
}
