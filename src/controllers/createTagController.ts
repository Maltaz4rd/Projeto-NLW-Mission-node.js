import { Request, Response } from "express";
import { CreateTagServices } from "../services/createTagServices";


class CreateTagController {
    async handle(request: Request, response: Response) {

        const { nome } = request.body

        const createTagServices = new CreateTagServices()

        const tag = await createTagServices.execute(nome)

        return response.json(tag)
    }
}

export { CreateTagController }