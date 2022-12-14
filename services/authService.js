const authDao = require("../models/authDao");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const error = require("../middlewares/errorConstructor");

const signInWithKakao = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
    },
  });

  const nickname = result.data.kakao_account.profile.nickname;
  const email = result.data.kakao_account.email;
  const kakaoId = result.data.id;

  if (!nickname || !email || !kakaoId) throw new error("KEY_ERROR", 400);
  
  const user = await authDao.getUserByEmail(email);

  if (!user) {
    await authDao.signUp(nickname, email, kakaoId);
  }

  return jwt.sign({ sub: kakaoId }, process.env.JWT_SECRET);
};

module.exports = { signInWithKakao };
