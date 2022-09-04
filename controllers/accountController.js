const accountService = require("../services/accountService");

const bookClasses = async (req, res) => {
  const kakaoId = req.kakaoId;

  const bookClasses = await accountService.bookClasses(kakaoId);

  return res.status(200).json({ bookClasses: bookClasses });
};

module.exports = { bookClasses };