window.addEventListener("scroll",function(){
    const header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})

const text = document.getElementById("typewriter").innerText;
document.getElementById("typewriter").innerText = ""; // Clear text initially

let i = 0;
function typeWriterEffect() {
  if (i < text.length) {
    document.getElementById("typewriter").innerText += text.charAt(i);
    i++;
    setTimeout(typeWriterEffect, 50); // Slower speed (50ms per character)
  } else {
    document.getElementById("typewriter").style.borderRight = "none"; // Remove cursor
  }
}

// Start typing effect on page load
window.onload = () => {
  typeWriterEffect();
};


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

    const projectsData = [
      {
        title: "AI-Powered Study Assistant",
        description: "A machine learning-based web application that helps students optimize their study schedules and provides personalized learning recommendations.",
        technologies: ["Python", "TensorFlow", "React", "Flask"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/yourusername/study-assistant",
        liveLink: "https://study-assistant.demo.com"
      },
      {
        title: "Smart Parking System",
        description: "IoT-based parking management system that tracks available spots in real-time and guides users to the nearest parking space.",
        technologies: ["Arduino", "React Native", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/yourusername/smart-parking"
      },
      {
        title: "Blockchain Voting Platform",
        description: "A secure and transparent e-voting system built on Ethereum blockchain, ensuring tamper-proof election results.",
        technologies: ["Solidity", "Web3.js", "React", "Hardhat"],
        image: "https://images.unsplash.com/photo-1496989981497-27d69cdad83e?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/yourusername/blockchain-voting",
        liveLink: "https://blockchain-voting.demo.com"
      }
    ];

    const container = document.getElementById("projects-container");

    // Generate bento cards
    projectsData.forEach((project, index) => {
      const card = document.createElement("div");
      card.classList.add("bento-card");
      card.style.animationDelay = `${index * 0.2}s`; // Stagger card animations

      card.innerHTML = `
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image" />
          <div class="image-overlay">Preview</div>
        </div>
        <div class="project-content">
          <h3 class="project-title"><i class="fas fa-heart"></i> ${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map((tech, techIndex) => `
              <span style="animation-delay: ${techIndex * 0.1}s">${tech}</span>
            `).join('')}
          </div>
          <div class="project-links">
            <a href="${project.githubLink}" target="_blank">GitHub</a>
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank">Live Demo</a>` : ''}
          </div>
        </div>
      `;

      container.appendChild(card);
    });