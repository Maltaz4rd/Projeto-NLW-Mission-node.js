import { Router } from "express";
import { CreateTagController } from "./controllers/createTagController";
import { createUserController } from "./controllers/createUserController";
import { ensureAdmin } from "./midleweres/ensureAdmin";

const router = Router();

const userController = new createUserController();
const tagController = new CreateTagController()

router.post("/usuarios", userController.handle);
router.post("/tags", ensureAdmin, tagController.handle)

export { router }