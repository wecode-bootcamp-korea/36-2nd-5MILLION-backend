const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const instructorRouter = require("./instructorRouter");
const accountRouter = require("./accountRouter");


router.use("/auth", authRouter.router);
router.use("/instructors", instructorRouter.router);
router.use("/account", accountRouter.router);

module.exports = router;
