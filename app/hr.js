import document from "document";
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";
import { user } from "user-profile";

export const setHr = () => {
  const hr = document.getElementById("hr");
  if (HeartRateSensor) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.addEventListener("reading", () => {
      console.log('reading heart', hrm.heartRate);
      hr.text = `${hrm.heartRate}/${user.restingHeartRate || "--"}`;
    });
    
    // Only do reading if a body is detected
    if (BodyPresenceSensor) {
      const body = new BodyPresenceSensor();
      body.addEventListener("reading", () => {
        console.log('reading', body.present);
        if (!body.present) {
          hrm.stop();
        } else {
          hrm.start();
        }
      });
      body.start();
    }
  }
};
