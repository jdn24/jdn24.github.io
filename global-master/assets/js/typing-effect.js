// JavaScript code for typing effect with backspace effect
const texts = ["Web Developer", "Data Analyst", "I.T Graduate", "A.I Enthusiast"]; // Add more texts as needed
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false; // Track if currently deleting

(function type() {
  if (count === texts.length) {
    count = 0; // Reset to loop through the texts again
  }
  currentText = texts[count];

  if (isDeleting) {
    // If deleting, remove characters
    letter = currentText.slice(0, --index);
  } else {
    // If typing, add characters
    letter = currentText.slice(0, ++index);
  }

  // Replace \n with <span> for custom line breaks and use innerHTML to interpret it
  document.querySelector('#typing-effect').innerHTML = letter.replace(/\n/g, '<br><span class="line-break"></span>');

  let typeSpeed = 120; // Typing speed
  if (isDeleting) {
    typeSpeed /= 2; // Make deleting faster
  }

  if (!isDeleting && letter.length === currentText.length) {
    // If the full text is displayed, pause before starting to delete
    typeSpeed = 2000; // Pause time before starting deletion
    isDeleting = true; // Start deleting on the next call
  } else if (isDeleting && letter.length === 0) {
    // If text is completely deleted, move to the next text
    isDeleting = false; // Stop deleting
    count++; // Move to the next text
    typeSpeed = 500; // Pause before starting the next text
  }

  setTimeout(type, typeSpeed); // Continue typing or deleting
})();