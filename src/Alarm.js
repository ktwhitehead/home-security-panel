class Alarm {
  constructor() {
    this.setup()
  }

  start() {
    this.changeFrequency = setInterval(() => {
      if (this.osc.frequency.value === this.highFreq) {
        this.osc.frequency.value = this.lowFreq;
      } else {
        this.osc.frequency.value = this.highFreq;
      }
    }, 150);

    this.alarming = true;
    this.osc.start();
  }

  stop() {
    this.osc.stop();
    clearInterval(this.changeFrequency);
    this.setup()
  }

  isAlarming() {
    return this.alarming;
  }

  setup() {
    const audioContext = new AudioContext();
    const gain = audioContext.createGain();
    gain.connect(audioContext.destination);
    gain.value = 0.5;

    this.highFreq = 2300;
    this.lowFreq = 1800;

    this.osc = audioContext.createOscillator();
    this.osc.connect(gain);
    this.osc.type = 'sawtooth';
    this.osc.frequency.value = this.highFreq;

    this.alarming = false;
  }
}

export default Alarm;
