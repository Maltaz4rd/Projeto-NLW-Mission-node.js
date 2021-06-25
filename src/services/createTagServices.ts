import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repository/tagRepository";


class CreateTagServices {
    async execute(nome: string) {
        const tagRepositories = getCustomRepository(TagRepositories);

        if (!nome) {
            throw new Error("Tag invalida");
        }

        const tagAlreadExists = await tagRepositories.findOne({
            nome
        })

        if (tagAlreadExists) {
            throw new Error("Tag já cadastrada.")
        }

        const tag = tagRepositories.create({
            nome
        })

        await tagRepositories.save(tag)

        return tag
    }

}

export { CreateTagServices }