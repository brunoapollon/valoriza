import { Router } from "express";
import { ComplimentController } from "../controllers/ComplimentController";

const complitRouter = Router();
const complimentContoler = new ComplimentController();

complitRouter.post("/compliments", complimentContoler.store);

export { complitRouter };
