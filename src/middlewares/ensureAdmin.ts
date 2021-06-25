import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const user_id = request.user_id;
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findOne(user_id);
  if (!user?.admin) {
    return response.status(401).end();
  }
  return next();
}
