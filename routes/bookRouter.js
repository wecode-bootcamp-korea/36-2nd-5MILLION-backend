const express = require("express");
const bookController = require("../controllers/bookController");
const errorHandler = require("../middlewares/errorHandler");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/:classId", auth.validationToken, errorHandler(bookController.bookClass));

module.exports = {
  router,
};
