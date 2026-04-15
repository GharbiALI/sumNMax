import { Router, Request, Response } from "express";
import { validateUserMiddleware, validateIdMiddleware } from '../middleware/user.middleware';
const router = Router();


router.post('/', validateUserMiddleware, (req: Request, res: Response) => {
    res.send('Welcome to the API!');
});

router.get('/:id', validateIdMiddleware, (req: Request, res: Response) => {
    res.send('Welcome to the API!');
});

export default router;