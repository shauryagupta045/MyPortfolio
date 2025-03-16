window.addEventListener("scroll",function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})

const text = document.getElementById('typewriter').innerText;
document.getElementById('typewriter').innerText = ''; // Clear text

let i = 0;
function typeWriterEffect() {
    if (i < text.length) {
        document.getElementById('typewriter').innerText += text.charAt(i);
        i++;
        setTimeout(typeWriterEffect, 5); // Adjust speed here (lower = faster)
    }
}

// Start typing effect on page load
window.onload = () => {
    typeWriterEffect();
}


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

