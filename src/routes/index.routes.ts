import { Router } from "express";
import userRoutes from "./user.routes";
import {authMiddleware} from "../auth/auth.middlware";


const router = Router();

//router.use(authMiddleware);
router.use('/users', userRoutes);

export default router;
