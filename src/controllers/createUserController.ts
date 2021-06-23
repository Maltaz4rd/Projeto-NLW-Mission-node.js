import { Request, Response } from "express";
import { CreateUserServices } from "../services/createUserServices";

class createUserController {
    async handle(request: Request, response: Response) {

        const { nome, email, admin } = request.body

        const createUserServices = new CreateUserServices()

        const user = await createUserServices.execute({ nome, email, admin })

        return response.json(user)

    }
}

export { createUserController }