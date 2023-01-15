const subjectsModel = require("../models/subjectsModel");
const getHexColor = require("./getHexColor");

async function setAppointmentColors(scheduleData) {
  if (!scheduleData) return;
  scheduleData = JSON.parse(scheduleData);
  let subjectColors = await subjectsModel.find();
  let subjectColors_ = [(await subjectsModel.find())[0].name];

  subjectColors.map(async (e, i) => {
    scheduleData.map(async (subject, j) => {
      if (subjectColors_.includes(subject.description)) null;
      else {
        subjectColors_.push(subject.description);
        const newSubject = new subjectsModel({
          name: subject.description,
          color: await getHexColor(subjectColors),
        });
        await newSubject.save();
      }
    });
  });
}

module.exports = setAppointmentColors;
