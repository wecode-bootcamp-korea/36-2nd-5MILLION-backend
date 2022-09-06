const { database } = require("./dataSource");

const bookClass = async (classId, userId) => {
  const result = await database.query(
    `INSERT INTO bookings(
        class_id, 
        user_id
     ) VALUES (?, ?)`,

    [classId, userId]
  );

  return result.getLastInsertedId();
};

const getUserIdBykakaoId = async (kakaoId) => {
  const result = await database.query(
    `SELECT 
      * 
     FROM users 
     WHERE kakao_id = ${kakaoId}`
  );

  return result.fetchOne();
};

const existClass = async (classId, userId) => {
  const result = await database.query(
    `SELECT
      EXISTS (
        SELECT 
          id 
        FROM bookings 
        WHERE class_id = ${classId}
        AND user_id = ${userId}
        ) as existClass`
  );

  return result.isExist();
};

const checkSeats = async (classId) => {
  const classInfo = await database.query(
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

  return classInfo.fetchOne();
};

module.exports = { bookClass, getUserIdBykakaoId, existClass, checkSeats };
