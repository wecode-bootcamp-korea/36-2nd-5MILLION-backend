const request = require("supertest");

const { createApp } = require("../app");
const { AppDataSource } = require("../models/dataSource");

const myMock = jest.fn();
myMock.mockReturnValue({
  id: 1010101022,
  connected_at: "2022-08-30T14:41:02Z",
  properties: {
    nickname: "아무개",
  },
  kakao_account: {
    profile_nickname_needs_agreement: false,
    profile: {
      nickname: "아무개",
    },
    has_email: true,
    email_needs_agreement: false,
    is_email_valid: true,
    is_email_verified: true,
    email: "amugae0210@gmail.com",
  },
});

beforeAll(async () => {
  app = createApp();
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`);
  await AppDataSource.query(`TRUNCATE users`);
  await AppDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`);
  await AppDataSource.destroy();
});

test("FAILED: KEY_ERROR", async () => {
  await request(app)
    .post("/auth/signIn")
    .send({ nickname: myMock().kakao_account.profile.nickname, email: myMock().kakao_account.email, kakaoId: myMock().id })
    .expect(400);
});

test("SUCCESS: kakao signin", async () => {
  await request(app)
  .post("/auth/signIn")
  .send({ nickname: myMock().kakao_account.profile.nickname, email: myMock().kakao_account.email, kakaoId: myMock().id })
  .expect(200);
});