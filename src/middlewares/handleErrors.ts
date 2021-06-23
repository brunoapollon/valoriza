import { NextFunction, Request, Response } from "express";
import "express-async-errors";

export function handleErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }
  return response
    .status(500)
    .json({ status: "error", messgae: "Internal server error" });
}
