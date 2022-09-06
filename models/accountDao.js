const { AppDataSource } = require("./dataSource");

const getbookedClasses = async (userId) => {
  return await AppDataSource.query(
    `SELECT 
      b.id, 
      i.name instructor, 
      DATE_FORMAT(c.start_time, '%H:%i') startTime, 
      DATE_FORMAT(c.end_time, '%H:%i') endTime, 
      ct.level classType,
      i.profile_image_url profileImage
    FROM bookings b 
    INNER JOIN classes c ON b.class_id = c.id 
    INNER JOIN instructors i ON c.instructor_id = i.id 
    INNER JOIN class_types ct ON c.class_type_id = ct.id 
    WHERE b.user_id = ${userId}
    ORDER BY start_time`
  );
};

const cancelClasses = async (userId, classId) => {
  return await AppDataSource.query(
    `DELETE 
     FROM bookings 
     WHERE class_id = ${classId} 
     AND user_id = ${userId}`
  );
};

const existClass = async (userId, classId) => {
  const [existClass] = await AppDataSource.query(
    `SELECT 
      EXISTS (
        SELECT 
          id 
        FROM bookings 
        WHERE class_id = ${classId} AND user_id = ${userId}
        ) as existClass`
  );

  return parseInt(existClass.existClass);
};

module.exports = { getbookedClasses, cancelClasses, existClass };
