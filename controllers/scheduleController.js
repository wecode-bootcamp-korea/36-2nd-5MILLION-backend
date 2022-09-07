const scheduleService = require("../services/scheduleService");

const getSchedule = async (req, res) => {
  const filtering = req.query;
  const instructor = filtering.instructor;
  const classType = filtering.classType;

  const scheduleList = await scheduleService.getSchedule(instructor, classType);

  return res.status(200).json(scheduleList);
};

const getInstructors = async (req, res) => {
  const instructorList = await scheduleService.getInstructors();

  return res.status(200).json({ instructorList: instructorList });
};

const getClassTypes = async (req, res) => {
  const classTypeList = await scheduleService.getClassTypes();

  return res.status(200).json({ classTypeList: classTypeList });
};

module.exports = { getSchedule, getInstructors, getClassTypes };