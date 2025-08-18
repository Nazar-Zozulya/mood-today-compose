import { PrismaClient } from "../client"
import { error, success } from "../tools/result"
import { MoodRepositoryTypes } from "./mood.type"

export const MoodRepository: MoodRepositoryTypes = {
	getMoodHistory: async (userId) => {
		try {
			const getMoodHistory = await PrismaClient.mood.findMany({
				where: {
					userId,
				},
			})

			return success(getMoodHistory)
		} catch (err) {
			return error(`${err}`)
		}
	},

	createMood: async (credentials) => {
		try {
			const newMood = await PrismaClient.mood.create({
				data: credentials
			})

			return success(newMood)
		} catch (err) {
			return error(`${err}`)
		}
	},
}
