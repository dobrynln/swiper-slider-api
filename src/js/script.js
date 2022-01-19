require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";

import bgPositionMobile from "../js/modules/bgPositionMobile";
import getParamsShare from "../js/modules/getParamsShare";
import share from "../js/modules/share";
import createSlide from "./modules/createSlide";
import swiperInit from "../js/modules/swiperInit";
window.addEventListener("DOMContentLoaded", () => {
  createSlide();
  swiperInit();
  bgPositionMobile();
  getParamsShare();
  share();
});
