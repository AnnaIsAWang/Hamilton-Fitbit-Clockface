import document from "document";
import { me as appbit } from "appbit";
import { today, goals } from "user-activity";
import { display } from "display";

import { round2, leaf } from "./utils.js";

const defaultGoals = {
  steps: 10000,
  calories: 2000,
  "activeZoneMinutes.total": 30,
  distance: 8000,
  elevationGain: 10,
}

const setStat = (type) => {
  const todayActivity = leaf(today.adjusted, type);
  const goal = goals[type] || defaultGoals[type];

  // Show progress
  const arc = document.getElementById(type);
  arc.sweepAngle = Math.floor(todayActivity / goal * 360);
  const char = document.getElementById(`${type}-char`);
  char.style.opacity = round2(todayActivity / goal);

  // Show daily stat
  const label = document.getElementById(`${type}-label`);
  label.text = type == "distance" ? round2(todayActivity / 1000) : todayActivity; // convert m to km
};

export const setActivity = () => {
  setStat("steps");
  setStat("distance");
  setStat("elevationGain");
  setStat("activeZoneMinutes.total");
  setStat("calories");
};
