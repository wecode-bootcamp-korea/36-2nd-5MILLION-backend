const accountService = require("../services/accountService");

const getbookedClasses = async (req, res) => {
  const kakaoId = req.kakaoId;

  const bookedClasses = await accountService.getbookedClasses(kakaoId);

  return res.status(200).json({ bookedClasses: bookedClasses });
};

const cancelClasses = async (req, res) => {
  const kakaoId = req.kakaoId;
  const classId = req.params.classId;

  await accountService.cancelClasses(kakaoId, classId);

  return res.status(200).json({ message : "DELETE_CLASS_SUCCESS" });
};

module.exports = { getbookedClasses, cancelClasses };

