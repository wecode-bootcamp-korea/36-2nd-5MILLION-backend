const instructorDao = require("../models/instructorDao");

const getInstructorDetail = async (limit, offset) => {
    return await instructorDao.getInstructorDetail(limit, offset);
};

module.exports = {
    getInstructorDetail
};
