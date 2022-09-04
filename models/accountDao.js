const { AppDataSource } = require("./dataSource");

const bookClasses = async (userId) => {
  return await AppDataSource.query(
    `SELECT 
      b.id, 
      i.name instructor, 
      DATE_FORMAT(c.start_time, '%H:%i') startTime, 
      DATE_FORMAT(c.end_time, '%H:%i') endTime, 
      ct.level classType 
    FROM bookings b 
    INNER JOIN classes c ON b.class_id = c.id 
    INNER JOIN instructors i ON c.instructor_id = i.id 
    INNER JOIN class_types ct ON c.class_type_id = ct.id 
    WHERE b.user_id = ${userId}
    ORDER BY start_time`
  );
};

module.exports = { bookClasses };
