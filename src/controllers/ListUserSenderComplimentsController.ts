import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController {
  public async index(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const user_id = request.user_id;
    const listUserSenderComplimentsService =
      new ListUserSenderComplimentsService();

    const compliment = await listUserSenderComplimentsService.execute(user_id);
    return response.json(compliment);
  }
}

export { ListUserSenderComplimentsController };
