const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const instructorRouter = require("./instructorRouter");
const accountRouter = require("./accountRouter");
const bookRouter = require("./bookRouter");

router.use("/auth", authRouter.router);
router.use("/instructors", instructorRouter.router);
router.use("/account", accountRouter.router);
router.use("/class", bookRouter.router);

module.exports = router;
