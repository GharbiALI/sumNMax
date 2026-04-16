import { history } from "../db/history.db";

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
    id: (history.length + 1).toString(),
    n,
    str,
    result,
  };

  history.push(newEntry);
  return newEntry;
};

export const findTrackById = (id: string): HistoryEntry | null => {
  const record = history.find((h) => h.id === id);
  return record || null;
};
