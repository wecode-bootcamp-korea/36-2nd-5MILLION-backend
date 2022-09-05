const instructorDao = require("../models/instructorDao");

const getInstructors = async (limit, offset) => {
    return await instructorDao.getInstructors(limit, offset);
};

module.exports = {
    getInstructors
};
