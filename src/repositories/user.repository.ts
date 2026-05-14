import { history } from "../db/history.db";
import { HistoryEntry } from "../services/user.services";

export const saveHistory = (entry: HistoryEntry): HistoryEntry => {
  history.push(entry);
  return entry;
};

export const findHistoryById = (id: string): HistoryEntry | null => {
  const record = history.find((h) => h.id === id);
  return record || null;
};

export const getHistoryLength = (): number => {
  return history.length;
};

export const findAllTraks = () => {
 return history;
};