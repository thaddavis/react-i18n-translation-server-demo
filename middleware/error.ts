import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";

function errorMiddleware(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  const stack = error.stack || "";
  response.status(status).json({
    status,
    message,
    stack,
  });
}

export default errorMiddleware;