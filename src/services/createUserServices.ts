import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/userRepository"
import { hash } from 'bcryptjs'

interface IUserRequest {
    nome: string,
    email: string,
    passsword: string,
    admin?: boolean
}

class CreateUserServices {
    async execute({ nome, email, passsword, admin }: IUserRequest) {

        const userRepositories = getCustomRepository(UserRepository)

        if (!email) {
            throw new Error("!!! email invalido !!!")
        }

        if (!passsword) {
            throw new Error("!!! password invalido !!!")
        }

        const userAlreadExists = await userRepositories.findOne({
            email
        })


        if (userAlreadExists) {
            throw new Error("usuario já existente")
        }

        const passwordHash = await hash(passsword, 8)

        const user = userRepositories.create({
            nome,
            email,
            admin,
            passsword: passwordHash
        })

        await userRepositories.save(user)

        return user;
    }
}

export { CreateUserServices }