import { Router, Request, Response } from "express";
import {
  validateUserMiddleware,
  validateIdMiddleware,
} from "../middleware/user.middleware";
import { processSumNMax, findTrackById } from "../services/user.services";
import { history } from "../db/history.db";
const router = Router();

router.post("/", validateUserMiddleware, (req: Request, res: Response) => {
  const { n, str } = req.body;
  try {
    const result = processSumNMax(n, str);
    res.status(201).json({ result: result.result });
  } catch (err: any) {
    res.status(500).json({ err: "Failed to process sum logic" });
  }
  console.log("history:", history);
});

router.get(
  "/tracks/:id",
  validateIdMiddleware,
  (req: Request, res: Response) => {
    const id = req.params.id as string;
    console.log("id:", id);
    const data = findTrackById(id);

    if (!data) {
      return res.status(404).json({ err: "Track not found" });
    }

    res.send(
      `operation du post numero ${id} was: generate sum of ${data.n} max in ${data.str}, result was ${data.result}`,
    );
  },
);
export default router;
