import { PrismaClient } from "../client"
import { error, success } from "../tools/result"
import { UserRepositoryTypes } from "./user.type"

export const UserRepository: UserRepositoryTypes = {
	createUser: async (username) => {
		try {
			const newUser = await PrismaClient.user.create({
				data: {
					username,
				},
			})

			return success(newUser)
		} catch (err) {
			return error(`${err}`)
		}
	},
	getUser: async (where) => {
		try {
			const user = await PrismaClient.user.findUnique({
				where: where,
			})

			if (!user) return error("user not found")

			return success(user)
		} catch (err) {
			return error(`${err}`)
		}
	},
}
