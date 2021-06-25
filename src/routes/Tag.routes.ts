import { Router } from "express";
import { TagController } from "../controllers/TagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const tagRouter = Router();
const tagContoler = new TagController();

tagRouter.post("/tags", ensureAuthenticated, ensureAdmin, tagContoler.store);

export { tagRouter };
