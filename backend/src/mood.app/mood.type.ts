import { Prisma } from "../generated/prisma"
import { Result } from "../types/result"
import { Request, Response } from "express"

export type Mood = Prisma.MoodGetPayload<{}>

export type MoodType = "angry" | "sad" | "happy" | "excited"

type createMoodInput = Prisma.MoodUncheckedCreateInput

type createMoodCredentials = { mood: MoodType }

export interface MoodControllerTypes {
	getMoodHistory: (req: Request, res: Response) => void
	createMood: (
		req: Request<{}, {}, createMoodCredentials>,
		res: Response
	) => void
}

export interface MoodServiceTypes {
	getMoodHistory: (id: number) => Promise<Result<Mood[]>>
	createMood: (credentials: createMoodInput) => Promise<Result<Mood>>
}

export interface MoodRepositoryTypes {
	getMoodHistory: (id: number) => Promise<Result<Mood[]>>
	createMood: (credentials: createMoodInput) => Promise<Result<Mood>>
}
