const accountDao = require("../models/accountDao");
const bookDao = require("../models/bookDao");
const error = require("../middlewares/errorConstructor");

const getbookedClasses = async (kakaoId) => {
  const user = await bookDao.getUserIdBykakaoId(kakaoId);

  if (!user.id) throw new error("KEY_ERROR", 400);

  const bookedClasses = await accountDao.getbookedClasses(user.id);

  return bookedClasses;
};

const cancelClasses = async (kakaoId, classId) => {
  const user = await bookDao.getUserIdBykakaoId(kakaoId);
  const isExist = await bookDao.existClass(user.id, classId);

  if (isExist) throw new error("NONE_EXIST_CLASS", 400);

  await accountDao.cancelClasses(user.id, classId);
};

module.exports = { getbookedClasses, cancelClasses };
