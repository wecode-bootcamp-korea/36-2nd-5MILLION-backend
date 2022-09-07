const express = require("express");
const instructorController = require("../controllers/instructorController");

const router = express.Router();

router.get("/:instructorId", instructorController.getInstructorDetail);

module.exports = {
    router
};
