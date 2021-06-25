import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController {
  public async index(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const user_id = request.user_id;
    const listUserReceiverComplimentsService =
      new ListUserReceiverComplimentsService();

    const compliment = await listUserReceiverComplimentsService.execute(
      user_id
    );
    return response.json(compliment);
  }
}

export { ListUserReceiverComplimentsController };
