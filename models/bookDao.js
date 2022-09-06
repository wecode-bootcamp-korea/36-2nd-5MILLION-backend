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

const checkSeats = async (classId) => {
  const [classInfo] = await AppDataSource.query(
    `SELECT 
      c.quantity, 
      (
        SELECT count(*) 
        FROM bookings b 
        WHERE b.class_id = c.id
      ) as bookedCount 
     FROM classes c
     WHERE c.id = ${classId}`
  );

  return classInfo;
};

module.exports = { bookClass, getUserIdBykakaoId, existClass, checkSeats };
