const express = require("express");
const scheduleController = require("../controllers/scheduleController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.get("", errorHandler(scheduleController.getSchedule));
router.get("/instructors", errorHandler(scheduleController.getInstructors));
router.get("/classtypes", errorHandler(scheduleController.getClassTypes));

module.exports = {
  router,
};
