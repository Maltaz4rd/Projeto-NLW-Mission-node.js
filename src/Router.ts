import { Router } from "express";
import { AutheticateUserController } from "./controllers/authenticateUserController";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { CreateTagController } from "./controllers/createTagController";
import { createUserController } from "./controllers/createUserController";
import { ensureAdmin } from "./midleweres/ensureAdmin";

const router = Router();

const userController = new createUserController();
const tagController = new CreateTagController()
const authenticateUser = new AutheticateUserController()
const complimentcontroller = new CreateComplimentController()

router.post("/usuarios", userController.handle);
router.post("/tags", ensureAdmin, tagController.handle)
router.post("/login", authenticateUser.handle)
router.post("/compliments", complimentcontroller.handle)

export { router }