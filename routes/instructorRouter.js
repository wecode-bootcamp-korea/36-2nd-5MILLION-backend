const express = require("express");
const instructorController = require("../controllers/instructorController");


const router = express.Router();

router.get("", instructorController.getInstructors);

module.exports = {
    router
};
