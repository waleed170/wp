// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navMenu.classList.remove('show');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && navMenu.classList.contains('show')) {
      if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
        navMenu.classList.remove('show');
      }
    }
  });
}

// Particle System with Connecting Lines
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

if (!canvas.getContext) {
  console.warn('Canvas not supported. Particle system disabled.');
  canvas.style.display = 'none';
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 50;
const connectionDistance = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i + 1; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        ctx.strokeStyle = body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }

  connectParticles();

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carousel functionality for all sections
function initCarousel(containerSelector, gridSelector, leftArrowSelector, rightArrowSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const grid = container.querySelector(gridSelector);
  const leftArrow = container.querySelector(leftArrowSelector);
  const rightArrow = container.querySelector(rightArrowSelector);

  if (!grid || !leftArrow || !rightArrow) return;

  function updateArrowVisibility() {
    if (grid.scrollLeft <= 0) {
      leftArrow.classList.add('hidden');
    } else {
      leftArrow.classList.remove('hidden');
    }

    if (grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 1) {
      rightArrow.classList.add('hidden');
    } else {
      rightArrow.classList.remove('hidden');
    }
  }

  // Initial check after a small delay to ensure layout is complete
  setTimeout(updateArrowVisibility, 100);

  grid.addEventListener('scroll', updateArrowVisibility);

  leftArrow.addEventListener('click', () => {
    grid.scrollBy({ left: -500, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    grid.scrollBy({ left: 500, behavior: 'smooth' });
  });

  window.addEventListener('resize', updateArrowVisibility);
}

// Initialize all carousels
initCarousel('.skills-container', '.skills-grid', '.skills-left-arrow', '.skills-right-arrow');
initCarousel('.experience-container', '.experience-grid', '.experience-left-arrow', '.experience-right-arrow');
initCarousel('.projects-container', '.projects-grid', '.projects-left-arrow', '.projects-right-arrow');
initCarousel('.certifications-container', '.certifications-grid', '.certifications-left-arrow', '.certifications-right-arrow');
