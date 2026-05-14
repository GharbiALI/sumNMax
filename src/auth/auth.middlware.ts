import { Request, Response, NextFunction  } from "express";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
   //@ts-ignore
    req.user = decoded;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
}