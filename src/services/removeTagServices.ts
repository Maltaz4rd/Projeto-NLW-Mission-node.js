import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repository/tagRepository";


class RemoveTagServices {
    async execute(nome: string) {
        const tagRepositories = getCustomRepository(TagRepositories)


        if (!nome) {
            throw new Error("!!! Tag invalida !!!")
        }

        const tagExists = await tagRepositories.findOne({ nome })

        if (!tagExists) {
            throw new Error("!!! Tag não encontrada !!!")
        }

        await tagRepositories.remove(tagExists)

        return "Tag removida com sucesso!"
    }
}

export { RemoveTagServices }