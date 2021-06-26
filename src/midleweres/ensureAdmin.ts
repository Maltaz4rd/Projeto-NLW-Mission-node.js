import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/userRepository";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const userRepository = getCustomRepository(UserRepository)

    const { user_id } = request

    const { admin } = await userRepository.findOne(user_id)

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "!!! Acesso não autorizado !!!"
    })
}