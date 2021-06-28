import { Request, Response } from 'express'
import { RemoveTagServices } from '../services/removeTagServices'


class RemoveTagController {
    async handle(request: Request, response: Response) {

        const { nome } = request.body

        const removeTagServices = new RemoveTagServices()

        const tagRemoved = await removeTagServices.execute(nome)

        return response.json(tagRemoved)
    }
}

export { RemoveTagController }