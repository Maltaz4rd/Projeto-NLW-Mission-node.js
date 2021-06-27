import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repository/complimentsRepository"




class ListUserReceiveComplimentsServices {
    async execute(user_id: string) {

        const complimentRepository = getCustomRepository(ComplimentsRepository)

        const compliments = complimentRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments
    }
}

export { ListUserReceiveComplimentsServices }