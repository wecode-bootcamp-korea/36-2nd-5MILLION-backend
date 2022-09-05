const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const instructorRouter = require("./instructorRouter");

router.use("/instructors", instructorRouter.router);
router.use("/auth", authRouter.router);

module.exports = router;
