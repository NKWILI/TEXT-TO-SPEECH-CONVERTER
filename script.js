// Erstellt ein neues SpeechSynthesisUtterance-Objekt, das den gesprochenen Text speichert
let speech = new SpeechSynthesisUtterance();

// Leeres Array, um die verfügbaren Stimmen zu speichern
let voices = [];


let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    
    // Holt alle verfügbaren Stimmen und speichert sie im voices-Array
    voices = window.speechSynthesis.getVoices();

    // Setzt die erste Stimme im Array als Standardstimme
    speech.voice = voices[0];

    // Fügt jede Stimme als Option in das Dropdown-Menü ein
    voices.forEach((voice, i) => {
        // Erstellt eine neue Option mit dem Namen der Stimme und dem Index
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Event Listener für das Ändern der Stimme im Dropdown-Menü
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Event Listener für den Button, um die Sprachausgabe zu starten
document.querySelector("button").addEventListener("click", () => {
    
    // Holt den Text aus dem Textbereich und setzt ihn als den zu sprechenden Text
    speech.text = document.querySelector("textarea").value;

    // Startet die Sprachausgabe mit dem angegebenen Text und der ausgewählten Stimme
    window.speechSynthesis.speak(speech);
});



// theme tooggle 
const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
