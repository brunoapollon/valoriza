import { Router } from "express";
import { UserController } from "../controllers/UserControler";

const userRouter = Router();
const userContoler = new UserController();

userRouter.post("/users", userContoler.store);

export { userRouter };
