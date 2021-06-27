import { Request, Response } from "express";
import { ListUserReceiveComplimentsServices } from "../services/listUserReceiveComplimentsServices";


class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request

        const listUserReceiverComplimentsServices = new ListUserReceiveComplimentsServices()

        const compliments = await listUserReceiverComplimentsServices.execute(user_id)

        console.log("user receiver " + compliments)
        return response.json(compliments)
    }
}

export { ListUserReceiveComplimentsController }