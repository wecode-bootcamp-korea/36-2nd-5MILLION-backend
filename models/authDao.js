const { database } = require("./dataSource");

const signUp = async (nickname, email, kakaoId) => {
  const result = await database.query(
    `INSERT INTO users (
      name,
      email,
      kakao_id
    ) VALUES (?,?,?)`,

    [nickname, email, kakaoId]
  );

  return result.getLastInsertedId();
};

const getUserByEmail = async (email) => {
  const user = await database.query(
    `SELECT *
     FROM users
     WHERE email = ?`,

    [email]
  );

  return user.fetchOne();
};

module.exports = { signUp, getUserByEmail };
