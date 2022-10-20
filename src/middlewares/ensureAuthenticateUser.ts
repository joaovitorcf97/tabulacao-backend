import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(404).json({
      message: 'Token missing!',
    });
  }

  const [, toke] = authHeader.split(' ');

  try {
    const { sub } = verify(toke, 'f298cce7f21371c26f85af48489b075d') as IPayload;

    request.id_admin = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token!',
    });
  }
}