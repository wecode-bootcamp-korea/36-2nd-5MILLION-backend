const { AppDataSource } = require("./dataSource");

const signUp = async (nickname, email, kakaoId) => {
  await AppDataSource.query(
    `INSERT INTO users (
      name,
      email,
      kakao_id
    ) VALUES (?,?,?)`,

    [nickname, email, kakaoId]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `SELECT *
     FROM users
     WHERE email = ?`,

    [email]
  );

  return user;
};

module.exports = { signUp, getUserByEmail };
