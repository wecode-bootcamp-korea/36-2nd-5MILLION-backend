const bookDao = require("../models/bookDao");
const jwt = require("jsonwebtoken");

const validationToken = async (req, res, next) => {
  try {
    const headers = req.headers["authorization"];
    const accessToken = headers.split(" ")[1];
    const decode = jwt.verify(accessToken, process.env.JWT_SECRET);
    const kakaoId = decode.sub;
    const user = await bookDao.getUserIdBykakaoId(kakaoId);

    if (!user) {
      res.status(404).json({ message: "USER_DOES_NOT_EXIST" });
    } else {
      req.kakaoId = kakaoId;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validationToken,
};