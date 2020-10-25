/*
 * Entry point for the watch app
 */
import { setClock } from "./clock.js";
import { setHr } from "./hr.js";
import { setBattery } from "./battery.js";
import { setActivity } from "./stats.js";

const main = () => {
  setClock();
  setHr();
  setBattery();
  setActivity();
}

main()