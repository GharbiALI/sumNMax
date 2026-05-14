import { Request, Response } from "express";
import { processSumNMax, findTrackById,getallTraksInDb } from "../services/user.services";

export const createUserTrack = (req: Request, res: Response) => {
  const { n, str } = req.body;

  try {
    const result = processSumNMax(n, str);
    return res.status(201).json({ result: result.result });
  } catch (err) {
    return res.status(500).json({ err: "Failed to process sum logic" });
  }
};

export const getUserTrack = (req: Request, res: Response) => {
  const id = req.params.id as string;

  const data = findTrackById(id);

  if (!data) {
    return res.status(404).json({ err: "Track not found" });
  }

  return res.send(
    `operation du post numero ${id} was: generate sum of ${data.n} max in ${data.str}, result was ${data.result}`,
  );
};

export const getAlltraks = (req: Request, res:Response) =>{
  const data = getallTraksInDb();
  return res.status(200).json(data);
  
  
}