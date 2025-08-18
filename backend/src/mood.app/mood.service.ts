import { MoodRepository } from "./mood.repository"
import { MoodServiceTypes } from "./mood.type"

export const MoodService: MoodServiceTypes = {
	getMoodHistory: async (id) => {
		return await MoodRepository.getMoodHistory(id)
	},

	createMood: async (credentials) => {
		return await MoodRepository.createMood(credentials)
	},
}
