const { database } = require("./dataSource");

const getSchedule = async (instructor, classType) => {
  if (!instructor) {
    instructor = null;
  }

  if (!classType) {
    classType = null;
  }

  const result = await database.query(
    `SELECT 
      day(start_time) as day, 
      CASE WEEKDAY(start_time) 
          WHEN '0' THEN 'Mon' 
          WHEN '1' THEN 'Tue' 
          WHEN '2' THEN 'Wed' 
          WHEN '3' THEN 'Thu' 
          WHEN '4' THEN 'Fri' 
          WHEN '5' THEN 'Sat' 
          WHEN '6' THEN 'Sun' END as dayofweek, 
      c.id, 
      c.quantity, 
      DATE_FORMAT(c.start_time, '%H:%i') startTime, 
      DATE_FORMAT(c.end_time, '%H:%i') endTime,
      t.level as classType, 
      i.name as instructor,
      (
        SELECT count(*)
        FROM bookings b
        WHERE b.class_id = c.id
      ) AS bookedCount
    FROM classes c 
    INNER JOIN class_types t ON c.class_type_id = t.id 
    INNER JOIN instructors i ON c.instructor_id = i.id
    WHERE CASE 
            WHEN ? IS NULL THEN i.name IS NOT NULL
            WHEN ? IS NOT NULL THEN i.name = ? END
    AND CASE
            WHEN ? IS NULL THEN t.level IS NOT NULL
            WHEN ? IS NOT NULL THEN t.level = ? END
    ORDER BY c.start_time`,

    [instructor, instructor, instructor, classType, classType, classType]
  );

  return result.fetchAll();
};

const getInstructors = async () => {
  const result = await database.query(
    `SELECT 
      id, 
      name 
    FROM instructors`
  );

  return result.fetchAll();
};

const getClassTypes = async () => {
  const result = await database.query(
    `SELECT 
      id, 
      level 
    FROM class_types`
  );

  return result.fetchAll();
};

module.exports = { getSchedule, getInstructors, getClassTypes };
