import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";
import { ListTagsService } from "../services/ListTagsService";

class TagController {
  public async store(request: Request, response: Response) {
    const { name } = request.body;
    const tagUserService = new CreateTagService();

    const tag = await tagUserService.execute({ name });
    return response.json(tag);
  }
  public async index(request: Request, response: Response) {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();
    return response.json(tags);
  }
}
export { TagController };
