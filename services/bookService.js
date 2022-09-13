const bookDao = require("../models/bookDao");
const error = require("../middlewares/errorConstructor");

const bookClass = async (classId, kakaoId) => {
  if (!classId || !kakaoId) throw new error("KEY_ERROR", 400);

  const user = await bookDao.getUserIdBykakaoId(kakaoId);
  const isExist = await bookDao.existClass(classId, user.id);
  const classInfo = await bookDao.checkSeats(classId);

  if (classInfo.quantity <= classInfo.bookedCount) {
    throw new error("FULLY_OCCUPIED_CLASS", 400);
  }

  if (isExist) throw new error("EXIST_CLASS", 400);
  await bookDao.bookClass(classId, user.id);
};

module.exports = { bookClass };
