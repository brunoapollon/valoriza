import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ListUserService } from "../services/ListUsersService";

class UserController {
  public async store(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });
    return response.json(user);
  }
  public async index(request: Request, response: Response) {
    const user_id = request.user_id;
    const listUserService = new ListUserService();

    const users = await listUserService.execute(user_id);
    return response.json(users);
  }
}

export { UserController };
