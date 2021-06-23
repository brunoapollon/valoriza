import { Router } from "express";
import { userRouter } from "./routes/User.routes";
import { tagRouter } from "./routes/Tag.routes";
const routes = Router();

routes.use(userRouter);
routes.use(tagRouter);

export { routes };
