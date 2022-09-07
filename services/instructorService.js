const instructorDao = require("../models/instructorDao");

const getInstructors = async (limit = 10, offset = 0) => {
    return await instructorDao.getInstructors(limit, offset);
};

const getInstructorDetail = async (limit, offset) => {
    return await instructorDao.getInstructorDetail(limit, offset);
};

module.exports = {
    getInstructors,
    getInstructorDetail
};
