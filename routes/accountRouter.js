const express = require("express");
const accountController = require("../controllers/accountController");
const errorHandler = require("../middlewares/errorHandler");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/class", auth.validationToken, errorHandler(accountController.getbookedClasses));
router.delete("/class/:classId", auth.validationToken, errorHandler(accountController.cancelClasses));

module.exports = {
  router,
};
