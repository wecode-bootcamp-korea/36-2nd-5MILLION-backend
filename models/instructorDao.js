const {AppDataSource} = require("./dataSource");

const getInstructors = async (limit, offset) => {
    try {
        return await AppDataSource.query(`
        SELECT
            id,
            name_en,
            profile_image_url
        FROM instructors 
        LIMIT ${limit} OFFSET ${offset} 
        `);
    }
    catch(err) {
        const error = new Error("INVALID_DATA_INPUT");
        err.statusCode = 500;
        throw error;
    }
};

module.exports = {
    getInstructors
};
