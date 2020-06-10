class TTSPlayer {
  constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoice();
  }

  say(text, onend) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.onend = onend;
    utter.voice = this.voice;
    this.synth.speak(utter);
  }

  loadVoice() {
    const voices = this.synth.getVoices();
    this.voice = voices.find(voice => voice.name === 'Google US English') || voices[0];

    if(!this.voice) {
      setTimeout(() => this.loadVoice());
    }
  }
}

export default TTSPlayer;