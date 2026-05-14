import request from 'supertest';
import app from '../../src/app';
import {history } from '../../src/db/history.db';
import { HistoryEntry, processSumNMax, findTrackById } from '../../src/services/user.services'; 

describe("User Services", () => {
  beforeEach(() => {
    history.length = 0;
    history.push({
      id: "1",
      n: 3,
      str: "123456",
      result: 15,
    });
  });

  it("should sum the top N digits and return the result",  () => {
    
    //given
    const n = 3;
    const str = "123456";

    //when 
    const result : HistoryEntry =  processSumNMax(n, str);
    //then
    expect(result.result).toBe(15);
  });

  it("should find a history entry by ID",  () => {
    //given
    const id = "1";
    //when
    const result : HistoryEntry  =  findTrackById(id) as HistoryEntry;
    //then
    expect(result).not.toBeNull();
    expect(result.id).toBe('1');
    expect(result.n).toBe(3);
    expect(result.str).toBe("123456");
    expect(result.result).toBe(15);
  });

  it("should return null if no history entry is found by ID", async () => {
    //given
    const id = "999";
    //when
    const result : HistoryEntry | null =  findTrackById(id);
    //then
    expect(result).toBeNull();
  });

});