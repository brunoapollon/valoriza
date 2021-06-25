import { Router } from "express";
import { UserController } from "../controllers/UserControler";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRouter = Router();
const userContoler = new UserController();

userRouter.post("/users", userContoler.store);
userRouter.get("/users", ensureAuthenticated, userContoler.index);

export { userRouter };
