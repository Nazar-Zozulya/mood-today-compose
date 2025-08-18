import { UserService } from "./user.service";
import { UserControllerTypes } from "./user.type";




export const UserController: UserControllerTypes = {
    loginOrRegister: async (req, res) => {
        const { username } = req.body

        const result = await UserService.loginOrRegister(username)

        res.json(result)
    },

    getUser: async (req, res) => {
        const id = +res.locals.userId

        const result = await UserService.getUser(id)

        res.json(result)
    }
}