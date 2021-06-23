import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class TagController {
  public async store(request: Request, response: Response) {
    const { name } = request.body;
    const tagUserService = new CreateTagService();

    const tag = await tagUserService.execute({ name });
    return response.json(tag);
  }
}
export { TagController };
