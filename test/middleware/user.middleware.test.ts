import request from 'supertest';
import app from '../../src/app';
import {history } from '../../src/db/history.db';
import {validateUserMiddleware, validateIdMiddleware} from '../../src/middleware/user.middleware';
import { HistoryEntry, processSumNMax, findTrackById } from '../../src/services/user.services';

describe("User Middleware test", () => {
  beforeEach(() => {
    history.length = 0;
    history.push({
      id: "1",
      n: 3,
      str: "123456",
      result: 15,
    });
  });
  it("should process invalid user input ", async() => {
    //given
    const invalidInputs = 
      { n: -1, str: "123456" }
    //when
    const res = await request(app).post('/users').send(invalidInputs);
    //then
    expect(res.statusCode).toBe(401);

  });
  it("should preocess invalid id", async() => {
    //given
    const id = "abc";
    //when
    const res = await request(app).get(`/users/tracks/${id}`);
    //then
    expect(res.statusCode).toBe(401);
  });
});

