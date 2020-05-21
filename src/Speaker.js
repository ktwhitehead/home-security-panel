import Alarm from "./Alarm";
import TTSPlayer from './TTSPlayer';

class Speaker {
  constructor() {
    this.ttsPlayer = new TTSPlayer();
    this.alarm = new Alarm();
  }

  say(text) {
    this.ttsPlayer.say(text);
  }

  alert(message) {
    if (message) {
      this.message = message;
      this.alarm.start();
      this.alarmInterval = setInterval(() => {
        this.alarm.stop();
        this.ttsPlayer.say(this.message, () => this.alarm.start());
      }, 9000);
    } else {
      this.alarm.start();
    }
  }

  stopAlert() {
    this.message = undefined;
    if (this.alarm.isAlarming()) this.alarm.stop();
    clearInterval(this.alarmInterval);
  }
}

export default Speaker;
