window.addEventListener("scroll",function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})


const roles = ["SOFTWARE ENGINEER ", "WEB DEVELOPER", "UI/UX DESIGNER"];
let currentRole = 0;
let charIndex = 0;
let isDeleting = false;

const typewriterElement = document.getElementById("typewriter");

function typeWriterEffect() {
  const currentText = roles[currentRole];
  
  if (isDeleting) {
    typewriterElement.innerText = currentText.substring(0, charIndex--);
  } else {
    typewriterElement.innerText = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 1000); 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRole = (currentRole + 1) % roles.length;
  }

  const speed = isDeleting ? 200 : 100;
  setTimeout(typeWriterEffect, speed);
}

window.onload = () => {
  typeWriterEffect();
};

// Skills Toggle 
    function showSkills() {
        document.getElementById('skills-list').style.display = 'grid';
        document.getElementById('tools-list').style.display = 'none';

        const buttons = document.querySelectorAll('.toggle-btn');
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    }

    function showTools() {
        document.getElementById('skills-list').style.display = 'none';
        document.getElementById('tools-list').style.display = 'grid';

        const buttons = document.querySelectorAll('.toggle-btn');
        buttons[0].classList.remove('active');
        buttons[1].classList.add('active');
    }

    

    // Menu button on mobile view 
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active');
});