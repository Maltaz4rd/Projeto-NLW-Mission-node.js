import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/userRepository";


class ListUsersServices {

    async execute() {
        const userRepository = getCustomRepository(UserRepository)

        const users = await userRepository.find()

        return users
    }

}

export { ListUsersServices }
