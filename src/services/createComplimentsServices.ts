import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repository/complimentsRepository"
import { UserRepository } from "../repository/userRepository"


interface IcomplimentRequest {
    user_sender: string,
    user_receiver: string,
    tag_id: string,
    message: string
}

class CreateComplimentsSevices {

    async execute({ user_sender, user_receiver, tag_id, message }: IcomplimentRequest) {

        const complimentReposaitory = getCustomRepository(ComplimentsRepository)
        const userRepository = getCustomRepository(UserRepository)

        if (user_sender === user_receiver) {
            throw new Error("!!! Usuario à receber invalido !!!")
        }

        const userReceiverExists = await userRepository.findOne(user_receiver)

        if (!userReceiverExists) {
            throw new Error("!!! Usuario à receber não existente !!!")
        }

        const compliment = complimentReposaitory.create({
            user_receiver,
            user_sender,
            tag_id,
            message
        })

        await complimentReposaitory.save(compliment)

        return compliment

    }

}

export { CreateComplimentsSevices }