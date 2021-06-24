import { Router } from "express";
import { userRouter } from "./routes/User.routes";
import { tagRouter } from "./routes/Tag.routes";
import { authRouter } from "./routes/Authentication.routes";
import { complitRouter } from "./routes/Compliment.routes";
const routes = Router();

routes.use(userRouter);
routes.use(tagRouter);
routes.use(authRouter);
routes.use(complitRouter);

export { routes };
