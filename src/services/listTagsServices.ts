import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repository/tagRepository";




class ListTagServices {
    async execute() {
        const tagRepositories = getCustomRepository(TagRepositories)

        const tags = await tagRepositories.find()

        return tags
    }
}

export { ListTagServices }