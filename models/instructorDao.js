const {AppDataSource} = require("./dataSource");

const getInstructorDetail = async (instructorId) => {
    try {
        return await AppDataSource.query(`
        SELECT
            name_en,
            name
        FROM instructors
        WHERE instructors.id=?`,
        [instructorId]
        );
    }
    catch(err) {
        const error = new Error("INVALID_DATA_INPUT");
        err.statusCode = 500;
        throw error;
    }
};

module.exports = {
    getInstructorDetail
};

