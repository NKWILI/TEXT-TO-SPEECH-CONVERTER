// Text-to-Speech Functionality
const speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.querySelector('select');

// Populate voices and set default voice
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options
    if (voices.length > 0) {
        speech.voice = voices[0]; // Set default voice
        voices.forEach((voice, i) => {
            voiceSelect.add(new Option(voice.name, i));
        });
    }
}

window.speechSynthesis.onvoiceschanged = populateVoices;

// Check if voices are already available (in case the event doesn't fire)
if (window.speechSynthesis.getVoices().length > 0) {
    populateVoices();
}

// Update voice when a new one is selected
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

// Listen button event listener
document.querySelector('.speak-button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    if (text) {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert('Please enter some text to convert to speech.');
    }
});

// Character Count
const textarea = document.querySelector('textarea');
const counterDiv = document.querySelector('.counter');

const updateCharacterCount = () => {
    const numberOfCharacters = textarea.value.length; // Removed trim()
    counterDiv.innerHTML = `<h5>Character Count: ${numberOfCharacters}</h5>`;
};

textarea.addEventListener('input', updateCharacterCount);
updateCharacterCount(); // Initialize

// Theme Switching
const themeButtons = document.querySelectorAll('.theme-btn');
const storedTheme = localStorage.getItem('theme') || 'dark';

const activateTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeButtons.forEach(btn => 
        btn.classList.toggle('active', btn.dataset.theme === theme)
    );
};

themeButtons.forEach(button => {
    button.addEventListener('click', () => activateTheme(button.dataset.theme));
});

activateTheme(storedTheme);

