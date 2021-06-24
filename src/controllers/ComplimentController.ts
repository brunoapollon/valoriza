import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class ComplimentController {
  public async store(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;
    const createComplimentService = new CreateComplimentService();

    const user = await createComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });
    return response.json(user);
  }
}

export { ComplimentController };
