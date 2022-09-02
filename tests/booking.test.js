const request = require("supertest");
const { createApp } = require("../app");
const { AppDataSource } = require("../models/dataSource");

describe("book class", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`);
    await AppDataSource.query(`TRUNCATE classes`);
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`);
    await AppDataSource.destroy();
  });

  test("SUCCESS: book class", async () => {
    await request(app)
      .post("/class/2")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0MDk5NzY5NjQsImlhdCI6MTY2MjM3NDUwMn0.IuluWRE_eZtGG6InfzabEbjwZGc3Bl5hfhzqaruOu2s",
      })
      .expect(201)
      .expect({
        message: "BOOK_CLASS_SUCCESS",
      });
  });

  test("FAILED: exist class", async () => {
    await request(app)
      .post("/class/1")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0MDk5NzY5NjQsImlhdCI6MTY2MjM3NDUwMn0.IuluWRE_eZtGG6InfzabEbjwZGc3Bl5hfhzqaruOu2s",
      })
      .expect(400);
  });
});
