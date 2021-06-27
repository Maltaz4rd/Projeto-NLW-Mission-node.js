import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repository/complimentsRepository"




class ListUserSendComplimentsServices {
    async execute(user_id: string) {

        const complimentsRepository = getCustomRepository(ComplimentsRepository)

        const compliments = await complimentsRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments
    }
}

export { ListUserSendComplimentsServices }