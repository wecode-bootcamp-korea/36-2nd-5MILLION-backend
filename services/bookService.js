const bookDao = require("../models/bookDao");
const error = require("../middlewares/errorConstructor");

const bookClass = async (classId, kakaoId) => {
  if (!classId || !kakaoId) {
    throw new error("KEY_ERROR", 400);
  }

  const user = await bookDao.getUserIdBykakaoId(kakaoId);
  const userId = user.id;

  const existClass = await bookDao.existClass(classId, userId);
  const classInfo = await bookDao.checkSeats(classId);

  if (classInfo.quantity <= classInfo.bookedCount) {
    throw new error("FULLY_OCCUPIED_CLASS", 400);
  }

  if (existClass >= 1) {
    throw new error("EXIST_CLASS", 400);
  } else if (existClass == 0) {
    await bookDao.bookClass(classId, userId);
  }
};

module.exports = { bookClass };
