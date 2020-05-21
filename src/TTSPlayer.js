class TTSPlayer {
  constructor() {
    this.synth = window.speechSynthesis;
    const voices = this.synth.getVoices();
    this.voice = voices.find(voice => voice.name === 'Google US English') || voices[0];
  }

  say(text, onend) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.onend = onend;
    utter.voice = this.voice;
    this.synth.speak(utter);
  }
}

export default TTSPlayer;