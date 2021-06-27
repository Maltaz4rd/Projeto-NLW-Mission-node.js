import { Request, Response } from "express";
import { ListTagServices } from "../services/listTagsServices";



class ListTagController {
    async handle(request: Request, response: Response) {
        const listTagServices = new ListTagServices()

        const tags = await listTagServices.execute()

        return response.json(tags)
    }
}

export { ListTagController }