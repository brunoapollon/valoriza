import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";
import { Request, Response } from "express";
import { AuthenticatedUserService } from "../services/AuthenticatedUserService";

class AuthenticatedController {
  public async store(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticatedUserService = new AuthenticatedUserService();

    const user = await authenticatedUserService.execute({
      email,
      password,
    });
    const token = sign(
      {
        email: user.email,
      },
      authConfig.jwt.secret,
      { subject: user.id, expiresIn: authConfig.jwt.expiresIn }
    );
    return response.json({ user, token });
  }
}

export { AuthenticatedController };
