import { getCustomRepository } from "typeorm"
import { complimentsRepository } from "../repository/complimentsRepository"
import { UserRepository } from "../repository/userRepository"


interface IcomplimentRequest {
    user_sender: string,
    user_receiver: string,
    tag_id: string,
    message: string
}

class CreateComplimentsSevices {

    async execute({ user_sender, user_receiver, tag_id, message }: IcomplimentRequest) {

        const complimentReposaitory = getCustomRepository(complimentsRepository)
        const userRepository = getCustomRepository(UserRepository)

        console.log("checando sae usuario sender é igual ao usuario receiver");
        console.log(user_sender);

        if (user_sender === user_receiver) {
            throw new Error("!!! Usuario à receber invalido !!!")
        }

        console.log("checando se usuarioReceiver existe");
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