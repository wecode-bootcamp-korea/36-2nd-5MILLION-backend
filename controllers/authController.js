const authService = require("../services/authService");

const kakaoSignIn = async (req, res) => {
  const headers = req.headers["authorization"];
  const kakaoToken = headers.split(" ")[1];

  const accessToken = await authService.signInWithKakao(kakaoToken);

  return res.status(200).json({ accessToken: accessToken });
};

module.exports = { kakaoSignIn };
