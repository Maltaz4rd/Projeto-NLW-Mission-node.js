import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/userRepository";


function ensureAutheticated(request: Request, response: Response, next: NextFunction) {

    const userRepository = getCustomRepository(UserRepository)

    //token
    const authToken = request.headers.authorization

    //validar se token esta preenchido
    if (!authToken) {
        response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    //validar se token é valido
    try {
        const { sub } = verify(token, "f50fdad9fa1a50e07be6cb6eb576c629")

        //recuperar informação do usuario
        request.user_id = sub as string

        next()

    } catch {
        response.status(401).end()
    }

}

export { ensureAutheticated }