import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../src/app";
import * as dotenv from "dotenv";
dotenv.config();

describe("Auth Middleware Validation", () => {
  const SECRET = process.env.JWT_SECRET as string;

  it("should allow request with valid token", async () => {
    // given
    const token = jwt.sign({},SECRET);
    const payload = { n: 2, str: "12345" };

    // when
    const response = await request(app)
      .post("/users")
      .set("Authorization", `Bearer ${token}`)
      .send(payload);

    // then
    expect(response.status).toBe(201);
  });

  it("should return 403 if token is signed with incorrect secret", async () => {
    // given
    const wrongSecret = "AZERTYUIOQSDFGHJKWXCVBN";
    const invalidToken = jwt.sign({ userId: 1 }, wrongSecret);
    const payload = { n: 2, str: "87665" };

    // when
    const response = await request(app)
      .post("/users")
      .set("Authorization", `Bearer ${invalidToken}`)
      .send(payload);

    // then
    expect(response.status).toBe(403);
  });

});