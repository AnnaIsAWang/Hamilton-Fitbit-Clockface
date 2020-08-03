import document from "document";
import clock from "clock";

import { pad2 } from "./utils.js";
import { setActivity } from "./stats.js";

export const setClock = () => {
  clock.granularity = "minutes";
  clock.ontick = (evt) => {
    const d = evt.date;
    const timeText = document.getElementById("time");
    const dateText = document.getElementById("date");

    timeText.text = `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
    dateText.text = d.toString().slice(0, 15);
    
    // Update activity
    setActivity();
  }
};
