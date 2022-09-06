const { database } = require("./dataSource");

const bookClass = async (classId, userId) => {
  const result = await database.query(
    `INSERT INTO bookings(
        class_id, 
        user_id
     ) VALUES (?, ?)`,

    [classId, userId]
  );

	return result.getLastInsertedId()

};

const getUserIdBykakaoId = async (kakaoId) => {
  const user = await database.query(
    `SELECT 
      * 
     FROM users 
     WHERE kakao_id = ${kakaoId}`
  );

  return user.fetchOne();
};

const existClass = async (classId, userId) => {
  const result = await database.query(
    `SELECT EXISTS id 
     FROM bookings 
     WHERE class_id = ${classId} 
     AND user_id = ${userId}`
  );

	return result.isExist()

};

module.exports = { bookClass, getUserIdBykakaoId, existClass };
