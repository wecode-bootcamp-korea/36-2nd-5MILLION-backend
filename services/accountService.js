const accountDao = require("../models/accountDao");
const bookDao = require("../models/bookDao");
const error = require("../middlewares/errorConstructor");

const bookClasses = async (kakaoId) => {
  const user = await bookDao.getUserIdBykakaoId(kakaoId);
  const userId = user.id;

  if (!userId) {
    throw new error("KEY_ERROR", 400);
  }

  const bookClasses = await accountDao.bookClasses(userId);

  return bookClasses;
};

module.exports = { bookClasses };