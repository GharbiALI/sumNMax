import { Router } from "express";
import {
  validateUserMiddleware,
  validateIdMiddleware,
} from "../middleware/user.middleware";
import {
  createUserTrack,
  getUserTrack,
  getAlltraks
} from "../controller/user.controller";

const router = Router();

router.post("/", validateUserMiddleware, createUserTrack);

router.get("/tracks/:id", validateIdMiddleware, getUserTrack);
router.get('/tracks',getAlltraks);
export default router;