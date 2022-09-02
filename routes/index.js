const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const bookRouter = require("./bookRouter");

router.use("/auth", authRouter.router);
router.use("/class", bookRouter.router);

module.exports = router;
