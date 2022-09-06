const accountDao = require("../models/accountDao");
const bookDao = require("../models/bookDao");
const error = require("../middlewares/errorConstructor");

const getbookedClasses = async (kakaoId) => {
  const user = await bookDao.getUserIdBykakaoId(kakaoId);
  const userId = user.id;

  if (!userId) {
    throw new error("KEY_ERROR", 400);
  }

  const bookedClasses = await accountDao.getbookedClasses(userId);

  return bookedClasses;
};

const cancelClasses = async (kakaoId, classId) => {
  const user = await bookDao.getUserIdBykakaoId(kakaoId);
  const userId = user.id;

  const isExist = await accountDao.existClass(userId, classId);

  if (!isExist) throw new error("NONE_EXIST_CLASS", 400);

  await accountDao.cancelClasses(userId, classId);
};

module.exports = { getbookedClasses, cancelClasses };
