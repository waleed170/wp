/* General Styles */
body {
  font-family: 'Poppins', 'Segoe UI', 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
  color: #e0e0e0;
  transition: background 0.4s, color 0.3s;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Glassmorphism Card */
.glass {
  background: rgba(30, 30, 30, 0.7);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

/* Canvas for particle system */
#particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background: transparent;
}

/* Container */
.container {
  width: 92%;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 30px;
}

/* Header */
header {
  background: linear-gradient(90deg, #0f2027 0%, #138d75 100%);
  color: #fff;
  padding: 28px 0 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #138d75;
  box-shadow: 0 2px 24px rgba(19, 141, 117, 0.2);
}

header h1 {
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: 2px;
  font-weight: 700;
  text-shadow: 0 2px 8px #138d75;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 32px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.3s;
}

nav ul li a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #00ffe7;
  transition: width 0.3s;
  position: absolute;
  left: 0;
  bottom: -4px;
  border-radius: 2px;
}
nav ul li a:hover::after {
  width: 100%;
}
nav ul li a:hover {
  color: #00ffe7;
}

#theme-toggle {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #00ffe7;
  margin-top: -5px;
  transition: color 0.3s;
}
#theme-toggle:hover {
  color: #fff;
  text-shadow: 0 0 8px #00ffe7;
}

/* Section */
.section {
  padding: 70px 0 50px 0;
}

/* Headings */
h2 {
  font-size: 2.2rem;
  margin-bottom: 28px;
  color: #00ffe7;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px #138d75;
  position: relative;
  overflow: hidden;
}
h2::after {
  content: '';
  position: absolute;
  left: 0; 
  bottom: -6px;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #00ffe7, #138d75, #00ffe7);
  filter: blur(2px);
  animation: neon-glow 2s infinite alternate;
  border-radius: 2px;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 28px;
}

.skill {
  composes: glass;
  padding: 28px 18px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,255,231,0.08);
  border: 1px solid #00ffe7;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}
.skill:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 8px 32px #00ffe755;
}

/* Experience Section */
.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

.experience {
  composes: glass;
  padding: 28px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,255,231,0.08);
  border: 1px solid #00ffe7;
  transition: transform 0.3s, box-shadow 0.3s;
}
.experience:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 8px 32px #00ffe755;
}

.experience h3 {
  margin: 0;
  font-size: 1.6rem;
  color: #00ffe7;
  letter-spacing: 1px;
}

.experience .company {
  font-weight: 600;
  margin: 12px 0;
  color: #fff;
}

.experience .duration {
  color: #00ffe7cc;
  margin: 5px 0;
}

/* Projects Section */
.projects-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
}

.projects-grid {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 28px;
  padding: 18px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.projects-grid::-webkit-scrollbar {
  display: none;
}

.project {
  min-width: 280px;
  max-width: 520px;
  composes: glass;
  padding: 28px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,255,231,0.08);
  border: 1px solid #00ffe7;
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 0 0 auto;
  position: relative;
}
.project:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 8px 32px #00ffe755;
}

.scroll-arrow {
  background: linear-gradient(135deg, #00ffe7 0%, #138d75 100%);
  color: #121212;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  transition: opacity 0.3s, box-shadow 0.3s;
  z-index: 2;
  box-shadow: 0 2px 12px #00ffe788;
}
.scroll-arrow:hover {
  opacity: 1;
  box-shadow: 0 4px 24px #00ffe7cc;
}

.left-arrow {
  position: absolute;
  left: -24px;
}

.right-arrow {
  position: absolute;
  right: -24px;
}

.scroll-arrow.hidden {
  display: none;
}

.project-link {
  display: inline-block;
  margin-top: 12px;
  color: #00ffe7;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s;
}
.project-link:hover {
  color: #fff;
  text-shadow: 0 0 8px #00ffe7;
  text-decoration: underline;
}

/* Certifications Section */
.certifications-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
}

.certifications-grid {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 28px;
  padding: 18px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.certifications-grid::-webkit-scrollbar {
  display: none;
}

.certification {
  min-width: 280px;
  max-width: 520px;
  composes: glass;
  padding: 28px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,255,231,0.08);
  border: 1px solid #00ffe7;
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 0 0 auto;
  position: relative;
}
.certification:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 8px 32px #00ffe755;
}

.certification h3 {
  margin: 0;
  font-size: 1.6rem;
  color: #00ffe7;
}

.certification .issuer {
  font-weight: 600;
  margin: 12px 0;
  color: #fff;
}

.certification .date {
  color: #00ffe7cc;
  margin: 5px 0;
}

.certification-link {
  display: inline-block;
  margin-top: 12px;
  color: #00ffe7;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s;
}
.certification-link:hover {
  color: #fff;
  text-shadow: 0 0 8px #00ffe7;
  text-decoration: underline;
}

.certification-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.certification-icon {
  font-size: 2rem;
  color: #00ffe7;
  text-shadow: 0 0 8px #00ffe7;
}

/* Contact Section */
#contact a {
  color: #00ffe7;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s;
}
#contact a:hover {
  color: #fff;
  text-shadow: 0 0 8px #00ffe7;
  text-decoration: underline;
}

/* Footer */
footer {
  background: linear-gradient(90deg, #0f2027 0%, #138d75 100%);
  color: #fff;
  text-align: center;
  padding: 28px 0;
  margin-top: 48px;
  border-top: 2px solid #00ffe7;
  box-shadow: 0 -2px 24px rgba(19, 141, 117, 0.2);
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: background 0.3s;
}

/* Dark Mode Styles */
body.dark-mode {
  background: linear-gradient(135deg, #121212 0%, #232526 100%);
  color: #00ffe7;
}

body.dark-mode header,
body.dark-mode footer {
  background: linear-gradient(90deg, #232526 0%, #0f2027 100%);
  color: #00ffe7;
  border-color: #00ffe7;
}

body.dark-mode .skill,
body.dark-mode .experience,
body.dark-mode .project,
body.dark-mode .certification {
  background: rgba(18, 18, 18, 0.85);
  color: #00ffe7;
  box-shadow: 0 4px 24px #00ffe733;
  border: 1px solid #00ffe7;
}

body.dark-mode #particle-canvas {
  background: transparent;
}

body.dark-mode .scroll-arrow {
  background: linear-gradient(135deg, #232526 0%, #00ffe7 100%);
  color: #00ffe7;
  box-shadow: 0 2px 12px #00ffe788;
}

/* Back to Top Button */
#back-to-top {
  display: none;
  position: fixed;
  bottom: 28px;
  right: 28px;
  padding: 14px;
  background: linear-gradient(135deg, #00ffe7 0%, #138d75 100%);
  color: #121212;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1000;
  box-shadow: 0 2px 12px #00ffe788;
  transition: background 0.3s, color 0.3s;
}
#back-to-top:hover {
  background: #fff;
  color: #00ffe7;
  box-shadow: 0 4px 24px #00ffe7cc;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .container {
    width: 98%;
    padding-top: 18px;
  }
  .skills-grid,
  .experience-grid,
  .certifications-grid {
    grid-template-columns: repeat(auto-fit, minmax(90vw, 1fr));
  }
  .projects-grid {
    gap: 18px;
  }
  .left-arrow {
    left: 0;
  }
  .right-arrow {
    right: 0;
  }
  header {
    flex-direction: column;
    text-align: center;
    padding: 18px 0 10px 0;
  }
  nav ul {
    flex-direction: column;
    gap: 12px;
  }
  h2 {
    font-size: 1.6rem;
  }
}

/* Neon Glow Animation */


/* Fade In Animation */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating Card Animation */
@keyframes float-card {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Apply Animations */
.section, .container, h2, .skill, .experience, .project, .certification, #contact, footer {
  animation: fade-in-up 1s cubic-bezier(.77,0,.175,1) both;
}

.skill, .experience, .project, .certification {
  animation: float-card 3s ease-in-out infinite;
}

.skill:hover, .experience:hover, .project:hover, .certification:hover {
  animation: neon-glow 1.2s alternate infinite;
  box-shadow: 0 0 32px #00ffe7, 0 0 64px #138d75, 0 0 16px;
}
