const scheduleDao = require("../models/scheduleDao");

const getSchedule = async (instructor, classType) => {
  const scheduleList = await scheduleDao.getSchedule(instructor, classType);
  
  const schedule = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };

  for (let i = 0; i < scheduleList.length; i++) {
    switch (scheduleList[i].day) {
      case 5:
        schedule.Mon.push(scheduleList[i]);
        break;
      case 6:
        schedule.Tue.push(scheduleList[i]);
        break;
      case 7:
        schedule.Wed.push(scheduleList[i]);
        break;
      case 8:
        schedule.Thu.push(scheduleList[i]);
        break;
      case 9:
        schedule.Fri.push(scheduleList[i]);
        break;
      case 10:
        schedule.Sat.push(scheduleList[i]);
        break;
      case 11:
        schedule.Sun.push(scheduleList[i]);
        break;
    }
  }

  return schedule;
};

const getInstructors = async () => {
  return await scheduleDao.getInstructors();
};

const getClassTypes = async () => {
  return await scheduleDao.getClassTypes();
};

module.exports = { getSchedule, getInstructors, getClassTypes };