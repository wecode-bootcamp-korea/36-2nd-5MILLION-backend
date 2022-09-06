const { database } = require("./dataSource");

const getbookedClasses = async (userId) => {
  const result = await database.query(
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

  return result.fetchAll();
};

const cancelClasses = async (userId, classId) => {
  const result = await database.query(
    `DELETE 
     FROM bookings 
     WHERE class_id = ${classId} 
     AND user_id = ${userId}`
  );

  if (!result.getAffectedRows() == 1) throw new Error("UNEXPECTED_ROWS_DELETED");
  return result.getAffectedRows();
};

module.exports = { getbookedClasses, cancelClasses };
