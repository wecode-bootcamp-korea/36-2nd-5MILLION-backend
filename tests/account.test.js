const request = require("supertest");
const { createApp } = require("../app");
const { AppDataSource } = require("../models/dataSource");

describe("book class", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
    await AppDataSource.query(
      `INSERT INTO bookings(class_id, user_id) VALUES (5,1)`
    );
  });

  afterAll(async () => {
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`);
    await AppDataSource.query(`TRUNCATE bookings`);
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`);
    await AppDataSource.destroy();
  });

  test("SUCCESS: get bookedClass ", async () => {
    await request(app)
      .get("/account/class")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0MDk5NzY5NjQsImlhdCI6MTY2MjQ2Nzk0M30.RGTjVyf9CzCi583Zn-cp2pCPiJwWB1o5CoW0IgOCEec",
      })
      .expect(200);
  });

  test("FAILED: exist class", async () => {
    await request(app)
      .get("/account/class")
      .set({
        Authorization: "Bearer token",
      })
      .expect(500);
  });
});
