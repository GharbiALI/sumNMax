import {
  saveHistory,
  findHistoryById,
  getHistoryLength,
  findAllTraks
} from "../repositories/user.repository";

export interface HistoryEntry {
  id: string;
  n: number;
  str: string;
  result: number;
}

export const processSumNMax = (n: number, str: string): HistoryEntry => {
  const digits = str.split("").map(Number);

  const result = digits
    .sort((a, b) => b - a)
    .slice(0, n)
    .reduce((acc, curr) => acc + curr, 0);

  const newEntry: HistoryEntry = {
    id: (getHistoryLength() + 1).toString(),
    n,
    str,
    result,
  };

  return saveHistory(newEntry);
};

export const findTrackById = (id: string): HistoryEntry | null => {
  return findHistoryById(id);
};

export const getallTraksInDb = () =>{
  return findAllTraks();
}