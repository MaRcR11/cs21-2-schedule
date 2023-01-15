const hexToRgb = require("./hexToRgb");
const subjectsModel = require("../models/subjectsModel");

async function getHexColor(subjectColors) {
  let randomHexColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  subjectColors = await subjectsModel.find();
  if (hexToRgb(randomHexColor).reduce((pv, cv) => pv + cv, 0) > 725)
    return getHexColor(subjectColors);
  subjectColors.map((e, i) => {
    if (
      Math.abs(
        hexToRgb(randomHexColor).reduce((pv, cv) => pv + cv, 0) -
          hexToRgb(e.color).reduce((pv, cv) => pv + cv, 0)
      ) > 40
    )
      return getHexColor(subjectColors);
  });

  return randomHexColor;
}

module.exports = getHexColor;
