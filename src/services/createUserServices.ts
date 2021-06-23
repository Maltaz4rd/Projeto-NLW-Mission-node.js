import { UserRepository } from "../repository/userRepository"

interface IUserRequest {
    nome: string,
    email: string,
    admin?: boolean
}

class CreateUserServices {
    async execute({ email, nome, admin }: IUserRequest) {

        const userRepositories = new UserRepository

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