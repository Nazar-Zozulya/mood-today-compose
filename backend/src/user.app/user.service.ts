import { success } from "../tools/result";
import { UserRepository } from "./user.repository";
import { UserServiceTypes } from "./user.type";
import { sign } from "jsonwebtoken";
// import { dot } from 'dotenv'


export const UserService: UserServiceTypes = {
    loginOrRegister: async (username) => {
        const findUser = await UserRepository.getUser({ username })

        if (findUser.status === 'success') {
            const token = sign({ id: findUser.data.id }, process.env.SECRET_KEY || '', {
                expiresIn: "7d",
            });

            console.log(token)
            return success(token)
        }

        const newUser = await UserRepository.createUser(username)

        if (newUser.status === 'error') {
            return newUser
        }

        const token = sign({ id: newUser.data.id }, process.env.SECRET_KEY || '', {
            expiresIn: "7d",
        });

        return success(token)
    },

    getUser: async (id) =>  {
        const user = await UserRepository.getUser({id})

        if ( user.status === 'error') return user

        return user
    }
}