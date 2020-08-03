import document from "document";
import { battery } from "power";

const drawBattery = () => {
  const batteryLevel = Math.floor(battery.chargeLevel);
  
  const batteryFill = document.getElementById("battery-fill");
  batteryFill.width = Math.floor(batteryLevel / 100 * 22);
  
  const charge = document.getElementById("battery");
  charge.text = batteryLevel + "%";
};

export const setBattery = () => {
  // Initialize
  drawBattery();
  
  battery.onchange = (charger, evt) => {
    drawBattery();
  }
};
