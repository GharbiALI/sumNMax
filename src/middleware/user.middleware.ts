import { Request, Response, NextFunction } from 'express';
import { validateUserInput, isInvalidId } from '../validators/user.validators';

export const validateUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { n, str } = req.body;
  const error = validateUserInput(n, str);
  
  if (error) return res.status(400).json({ error: error });
  next();
};

export const validateIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    if (isInvalidId(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }
  next();
};