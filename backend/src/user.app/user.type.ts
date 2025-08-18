import { Prisma } from "../generated/prisma"
import { Result } from "../types/result"
import { Request, Response } from 'express'

export type User = Prisma.UserGetPayload<{}>

export type UserWhereUnique = Prisma.UserWhereUniqueInput

type loginOrRegisterCredentials = { username: string }

export interface UserControllerTypes {
	loginOrRegister: (
		req: Request<{}, {}, loginOrRegisterCredentials>,
		res: Response
	) => void
	getUser: (req: Request, res: Response) => void
}

export interface UserServiceTypes {
	loginOrRegister: (username: string) => Promise<Result<string>>
	getUser: (id: number) => Promise<Result<User>>
	// findUserById: (id: number) => Promise<Result<User>>
}

export interface UserRepositoryTypes {
	createUser: (username: string) => Promise<Result<User>>
	getUser: (where: UserWhereUnique) => Promise<Result<User>>
}
