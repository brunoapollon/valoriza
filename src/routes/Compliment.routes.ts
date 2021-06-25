import { Router } from "express";
import { ComplimentController } from "../controllers/ComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const complitRouter = Router();
const complimentContoler = new ComplimentController();

complitRouter.post(
  "/compliments",
  ensureAuthenticated,
  complimentContoler.store
);

export { complitRouter };
