import { Request, Response } from "express";
import { CreateComplimentsSevices } from "../services/createComplimentsServices";



class CreateComplimentController {
    async handle(request: Request, response: Response) {

        const { user_receiver, tag_id, message } = request.body
        const { user_id } = request

        const complimentsServices = new CreateComplimentsSevices()

        const compliment = await complimentsServices.execute({
            user_sender: user_id, user_receiver, tag_id, message
        })

        console.log(compliment);


        return response.json(compliment)
    }
}

export { CreateComplimentController }