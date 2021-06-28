import { Router } from "express";
import { AutheticateUserController } from "./controllers/authenticateUserController";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { CreateTagController } from "./controllers/createTagController";
import { createUserController } from "./controllers/createUserController";
import { ListUserSendComplimentsController } from "./controllers/listUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/listUserReceiveComplimentController";
import { ensureAdmin } from "./midleweres/ensureAdmin";
import { ensureAutheticated } from "./midleweres/ensureAuthenticate";
import { ListTagController } from "./controllers/listTagController";
import { ListUsersController } from "./controllers/listUsersController";
import { RemoveTagController } from "./controllers/removeTagController";

const router = Router();

const userController = new createUserController();
const tagController = new CreateTagController()
const authenticateUser = new AutheticateUserController()
const complimentcontroller = new CreateComplimentController()
const listUserSendComplimentController = new ListUserSendComplimentsController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController()
const listTagController = new ListTagController()
const listUsersController = new ListUsersController()
const removeTagController = new RemoveTagController()

router.post("/usuarios", userController.handle);
router.post("/tags", ensureAutheticated, ensureAdmin, tagController.handle)
router.post("/login", authenticateUser.handle)
router.post("/compliments", ensureAutheticated, complimentcontroller.handle)
router.get("/compliments/sended", ensureAutheticated, listUserSendComplimentController.handle)
router.get("/compliments/received", ensureAutheticated, listUserReceiveComplimentController.handle)
router.get("/tags", ensureAutheticated, ensureAdmin, listTagController.handle)
router.get("/users", ensureAutheticated, listUsersController.handle)
router.delete("/tag", ensureAutheticated, ensureAdmin, removeTagController.handle)

export { router }