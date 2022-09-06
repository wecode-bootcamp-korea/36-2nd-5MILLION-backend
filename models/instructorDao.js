const { database } = require("./dataSource");

const getInstructors = async (limit, offset) => {
  const result = await database.query(
    `SELECT
        id,
        name_en,
        profile_image_url
     FROM instructors 
     LIMIT ${limit} OFFSET ${offset}`
  );

  return result.fetchAll();
};

const getInstructorDetail = async (instructorId) => {
  const result = await database.query(
    `SELECT
          name_en,
          name
        FROM instructors
        WHERE instructors.id=?`,

    [instructorId]
  );

  return result.fetchAll();
};

module.exports = { getInstructors, getInstructorDetail };
