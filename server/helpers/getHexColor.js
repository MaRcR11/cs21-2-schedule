const hexToRgb = require("./hexToRgb");
const subjectsModel = require("../models/subjectsModel");

async function getHexColor(subjectColors) {
  // let randomHexColor =
  //   "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  // subjectColors = await subjectsModel.find();
  // if (hexToRgb(randomHexColor).reduce((pv, cv) => pv + cv, 0) > 725)
  //   return getHexColor(subjectColors);
  // subjectColors.map((e, i) => {
  //   if (
  //     Math.abs(
  //       hexToRgb(randomHexColor).reduce((pv, cv) => pv + cv, 0) -
  //         hexToRgb(e.color).reduce((pv, cv) => pv + cv, 0)
  //     ) > 40
  //   )
  //     return getHexColor(subjectColors);
  // });

  let randomHexColors = [
    "#34568B",
    "#FF6F61",
    "#6B5B95",
    "#6B5B95",
    "#F7CAC9",
    "#F7CAC9",
    "#955251",
    "#009B77",
    "#DD4124",
    "#D65076",
    "#45B8AC",
    "#EFC050",
    "#5B5EA6",
    "#9B2335",
    "#DFCFBE",
    "#55B4B0",
    "#E15D44",
    "#7FCDCD",
    "#FDAC53",
    "#9BB7D4",
    "#B55A30",
    "#B55A30",
    "#0072B5",
    "#A0DAA9",
    "#E9897E",
    "#00A170",
    "#926AA6",
    "#363945",
    "#939597",
    "#EFE1CE",
    "#E0B589",
    "#FFA500",
    "#56C6A9",
    "#4B5335",
    "#798EA4",
    "#FA7A35",
    "#00758F",
    "#EDD59E",
    "#282D3C",
    "#EDF1FF",
    "#A09998",
    "#D9CE52",
    "#006B54",
    "#6A2E2A",
    "#E6AF91",
    "#FF6F61",
    "#FE840E",
    "#FF6F61",
    "#8D9440",
    "#00539C",
    "#D69C2F",
  ];


  let i = Math.floor(Math.random() * randomHexColors.length)
  const randomHexColor = randomHexColors[i]
  randomHexColors.splice(i, i)
  return randomHexColor;
}

module.exports = getHexColor;
