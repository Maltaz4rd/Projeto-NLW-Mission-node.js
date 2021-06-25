import { Request, Response } from "express";
import { AuthenticateUserServices } from "../services/createAthenticationToken";




class AutheticateUserController {
    async handle(request: Request, response: Response) {

        const { email, passsword } = request.body

        const authenticateUserServices = new AuthenticateUserServices()

        const token = await authenticateUserServices.execute({ email, passsword })

        return response.json(token)

    }
}

export { AutheticateUserController }