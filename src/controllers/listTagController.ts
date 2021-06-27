import { Request, Response } from "express";
import { ListTagServices } from "../services/listTagsServices";



class ListTagController {
    async handle(request: Request, response: Response) {
        const listTagServices = new ListTagServices()

        let tags = await listTagServices.execute()
        tags = tags.map((tag) => ({ ...tag, name_custom: `#${tag.nome}` }))

        return response.json(tags)
    }
}

export { ListTagController }