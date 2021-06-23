import { Router } from "express";
import { TagController } from "../controllers/TagController";

const tagRouter = Router();
const tagContoler = new TagController();

tagRouter.post("/tags", tagContoler.store);

export { tagRouter };
