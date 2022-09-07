const instructorDao = require("../models/instructorDao");

const getInstructors = async (limit = 10, offset = 0) => {

    if (!limit || offset === undefined) {
        throw new Error("KEY_ERROR", 500);
    }
    return await instructorDao.getInstructors(limit, offset);
};

module.exports = {
    getInstructors
};
