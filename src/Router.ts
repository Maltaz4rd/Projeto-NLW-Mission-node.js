import { Router } from "express";
import { AutheticateUserController } from "./controllers/authenticateUserController";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { CreateTagController } from "./controllers/createTagController";
import { CreateUserController } from "./controllers/createUserController";
import { ListUserSendComplimentsController } from "./controllers/listUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/listUserReceiveComplimentController";
import { ensureAdmin } from "./midleweres/ensureAdmin";
import { ensureAutheticated } from "./midleweres/ensureAuthenticate";
import { ListTagController } from "./controllers/listTagController";
import { ListUsersController } from "./controllers/listUsersController";
import { RemoveTagController } from "./controllers/removeTagController";
import { ListAllComplimentsController } from "./controllers/listAllComplimentsController";

const router = Router();

const userController = new CreateUserController();
const tagController = new CreateTagController()
const complimentcontroller = new CreateComplimentController()
const authenticateUser = new AutheticateUserController()

const listAllComplimentsController = new ListAllComplimentsController()
const listUserSendComplimentController = new ListUserSendComplimentsController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController()
const listTagController = new ListTagController()
const listUsersController = new ListUsersController()

const removeTagController = new RemoveTagController()

router.post("/usuarios", userController.handle);
router.post("/tags", ensureAutheticated, ensureAdmin, tagController.handle)
router.post("/login", authenticateUser.handle)
router.post("/compliments", ensureAutheticated, complimentcontroller.handle)

router.get("/compliments", ensureAutheticated, listAllComplimentsController.handle)
router.get("/compliments/sended", ensureAutheticated, listUserSendComplimentController.handle)
router.get("/compliments/received", ensureAutheticated, listUserReceiveComplimentController.handle)
router.get("/tags", ensureAutheticated, ensureAdmin, listTagController.handle)
router.get("/users", ensureAutheticated, listUsersController.handle)

router.delete("/tag", ensureAutheticated, ensureAdmin, removeTagController.handle)

export { router }