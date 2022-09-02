const request = require("supertest");
const { createApp } = require("../app");
const { AppDataSource } = require("../models/dataSource");

describe("get schedules", () => {
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

  test("SUCCESS: get schedule", async () => {
    await request(app).get("/schedule").expect(200);
  });

  test("SUCCESS: get instructors", async () => {
    await request(app).get("/schedule/instructors").expect(200);
  });

  test("SUCCESS: get classtypes", async () => {
    await request(app).get("/schedule/classtypes").expect(200);
  });
});