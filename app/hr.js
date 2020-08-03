import document from "document";
import { HeartRateSensor } from "heart-rate";
import { user } from "user-profile";

export const setHr = () => {
  const hr = document.getElementById("hr");
  if (HeartRateSensor) {
    const hrm = new HeartRateSensor();
    hrm.addEventListener("reading", () => {
      hr.text = `${hrm.heartRate}/${user.restingHeartRate || "--"}`;
    });
    hrm.start();
  }
};
