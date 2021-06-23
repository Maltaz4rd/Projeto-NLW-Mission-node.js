import { Router } from "express";
import { createUserController } from "./controllers/createUserController";

const router = Router();

const userController = new createUserController();

router.post("/usuario", userController.handle);

export { router }