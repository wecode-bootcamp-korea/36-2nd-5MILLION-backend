const bookService = require("../services/bookService");

const bookClass = async (req, res) => {
  const { classId } = req.params;
  const kakaoId = req.kakaoId;

  await bookService.bookClass(classId, kakaoId);

  return res.status(201).json({ message: "BOOK_CLASS_SUCCESS" });
};

module.exports = {
  bookClass,
};
