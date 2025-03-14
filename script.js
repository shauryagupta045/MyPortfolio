window.addEventListener("scroll",function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})

const typewriterText = document.getElementById('typewriter-text');
const textToType = 'SOFTWARE DEVELOPER';
let charIndex = 0;

function typeChar() {
  typewriterText.textContent += textToType[charIndex];
  charIndex++;
  if (charIndex < textToType.length) {
    setTimeout(typeChar, 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeChar();
});