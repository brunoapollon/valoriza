import { Router } from "express";
import { userRouter } from "./routes/User.routes";

const routes = Router();

routes.use(userRouter);

export { routes };
