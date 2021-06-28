import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/userRepository";
import { sign } from 'jsonwebtoken'

interface iAuthenticate {
    email: string,
    passsword: string
}

class AuthenticateUserServices {

    async execute({ email, passsword }: iAuthenticate) {
        const userRepository = getCustomRepository(UserRepository)

        //verificando se o email existe
        const user = await userRepository.findOne({ email })

        if (!user) {
            throw new Error("Email/senha invalido")
        }

        //verificar se a senha está correta
        // 12345 == 654165-asdgf15a65dfg4-a5s4dg6
        const authenticated = await compare(passsword, user.passsword)

        if (!authenticated) {
            throw new Error("Email/senha invalido")
        }

        //gerar token
        const token = sign({
            email: user.email
        },
            "f50fdad9fa1a50e07be6cb6eb576c629", {
            subject: user.id,
            expiresIn: "1d"
        })

        return (token)
    }
}

export { AuthenticateUserServices }