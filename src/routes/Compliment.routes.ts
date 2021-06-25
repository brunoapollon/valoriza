import { Router } from "express";
import { ComplimentController } from "../controllers/ComplimentController";
import { ListUserReceiverComplimentsController } from "../controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "../controllers/ListUserSenderComplimentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const complitRouter = Router();
const complimentContoler = new ComplimentController();
const listUserSenderComplimentsController =
  new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController();

complitRouter.post(
  "/compliments",
  ensureAuthenticated,
  complimentContoler.store
);
complitRouter.get(
  "/compliments/sender",
  ensureAuthenticated,
  listUserSenderComplimentsController.index
);
complitRouter.get(
  "/compliments/receiver",
  ensureAuthenticated,
  listUserReceiverComplimentsController.index
);
export { complitRouter };
