import { Request, Response } from "express";
import { ListUserSendComplimentsServices } from "../services/listUserSendComplimentsServices";

class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request

        const listUserSendComplimentsServices = new ListUserSendComplimentsServices()

        const compliments = await listUserSendComplimentsServices.execute(user_id)

        return response.json(compliments)

    }
}

export { ListUserSendComplimentsController }