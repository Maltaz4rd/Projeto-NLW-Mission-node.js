import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/userRepository"

interface IUserRequest {
    nome: string,
    email: string,
    admin?: boolean
}

class CreateUserServices {
    async execute({ nome, email, admin }: IUserRequest) {

        const userRepositories = getCustomRepository(UserRepository)

        if (!email) {
            throw new Error("email invalido!")
        }

        const userAlreadExists = await userRepositories.findOne({
            email
        })


        if (userAlreadExists) {
            throw new Error("usuario já existente")
        }

        const user = userRepositories.create({
            nome,
            email,
            admin
        })

        await userRepositories.save(user)

        return user;
    }
}

export { CreateUserServices }