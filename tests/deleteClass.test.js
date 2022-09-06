const request = require("supertest");
const { createApp } = require("../app");
const { AppDataSource } = require("../models/dataSource");

describe("delete class", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
    await AppDataSource.query(
      `insert into bookings(class_id, user_id) values (3, 1)`
    );
  });

  afterAll(async () => {
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`);
    await AppDataSource.query(`TRUNCATE bookings`);
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`);
    await AppDataSource.destroy();
  });

  test("SUCCESS: delete class", async () => {
    await request(app)
      .delete("/account/class/3")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0MDk5NzY5NjQsImlhdCI6MTY2MjQ2Nzk0M30.RGTjVyf9CzCi583Zn-cp2pCPiJwWB1o5CoW0IgOCEec",
      })
      .expect(200)
      .expect({
        message: "DELETE_CLASS_SUCCESS",
      });
  });

  test("FAILED: not exist class", async () => {
    await request(app)
      .delete("/account/class/5")
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0MDk5NzY5NjQsImlhdCI6MTY2MjQ2Nzk0M30.RGTjVyf9CzCi583Zn-cp2pCPiJwWB1o5CoW0IgOCEec",
      })
      .expect(400)
      .expect({
        message: "NONE_EXIST_CLASS",
      });
  });
});
