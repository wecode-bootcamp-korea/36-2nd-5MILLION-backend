const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const instructorRouter = require("./instructorRouter");
const accountRouter = require("./accountRouter");
const scheduleRouter = require("./scheduleRouter");
const bookRouter = require("./bookRouter");

router.use("/auth", authRouter.router);
router.use("/instructors", instructorRouter.router);
router.use("/account", accountRouter.router);
router.use("/schedule", scheduleRouter.router);
router.use("/class", bookRouter.router);

module.exports = router;
