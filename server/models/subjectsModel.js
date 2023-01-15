const mongoose = require("mongoose");

const subjectsModel = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  color: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("subjectColors", subjectsModel, "subjectColors");