import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repository/complimentsRepository";
import { TagRepositories } from "../repository/tagRepository";



class ListAllComplimentsServices {
    async execute() {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)

        const allTags = await complimentsRepository.find()

        return allTags
    }
}

export { ListAllComplimentsServices }