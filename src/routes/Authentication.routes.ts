import { Router } from "express";
import { AuthenticatedController } from "../controllers/AuthenticatedController";

const authRouter = Router();
const authenticatedController = new AuthenticatedController();

authRouter.post("/authentication", authenticatedController.store);

export { authRouter };
