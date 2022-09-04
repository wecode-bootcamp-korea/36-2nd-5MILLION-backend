const { AppDataSource } = require("./dataSource");

const bookClass = async (classId, userId) => {
  await AppDataSource.query(
    `INSERT INTO bookings(
        class_id, 
        user_id
     ) VALUES (?, ?)`,

    [classId, userId]
  );
};

const getUserIdBykakaoId = async (kakaoId) => {
  const [user] = await AppDataSource.query(
    `SELECT 
      * 
     FROM users 
     WHERE kakao_id = ${kakaoId}`
  );

  return user;
};

const existClass = async (classId, userId) => {
  const [existClass] = await AppDataSource.query(
    `SELECT count(*) 
     FROM bookings 
     WHERE class_id = ${classId} 
     AND user_id = ${userId}`
  );

  return Object.values(existClass)[0];
};

module.exports = { bookClass, getUserIdBykakaoId, existClass };