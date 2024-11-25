let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; 
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.value = i;
        voiceSelect.appendChild(option);
    });
    speech.voice = voices[0]; // Set default voice
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("button").style.transform = "scale(1.1)";
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    
    // Reset the scale back to 1 after 100 milliseconds
    setTimeout(() => {
        document.querySelector("button").style.transform = "scale(1)";
    }, 100);
});