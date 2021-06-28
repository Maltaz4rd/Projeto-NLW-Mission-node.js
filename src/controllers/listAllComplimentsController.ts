import { Request, Response } from "express";
import { ListAllComplimentsServices } from "../services/listAllComplimentsServices";



class ListAllComplimentsController {
    async handle(request: Request, response: Response) {
        const listAllComplimentsServices = new ListAllComplimentsServices()

        const allCompliments = await listAllComplimentsServices.execute()

        return response.json(allCompliments)
    }

}

export { ListAllComplimentsController }