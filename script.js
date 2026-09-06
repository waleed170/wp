// floating stars
const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 60; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 3 + 1;
  s.style.width = s.style.height = size + 'px';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.opacity = (Math.random() * 0.6).toString();
  starsContainer.appendChild(s);
}

// snow effect (skipped entirely if the user prefers reduced motion)
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❄';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  const duration = Math.random() * 5 + 5;
  snowflake.style.animationDuration = duration + 's';
  document.body.appendChild(snowflake);
  setTimeout(() => { snowflake.remove(); }, duration * 1000);
}

if (!prefersReducedMotion) {
  setInterval(createSnowflake, 200);
}

// Sorting Hat logic
const houses = [
  { id: 'Gryffindor', color: '--gryff' },
  { id: 'Slytherin', color: '--slyth' },
  { id: 'Ravenclaw', color: '--raven' },
  { id: 'Hufflepuff', color: '--huff' }
];

const result = document.getElementById('result');
const btn = document.getElementById('sortBtn');

function getSavedHouse() {
  try {
    return localStorage.getItem('hp_house');
  } catch (e) {
    return null;
  }
}

function saveHouse(h) {
  try {
    localStorage.setItem('hp_house', h);
  } catch (e) {
    // storage unavailable (e.g. private browsing) — silently skip
  }
}

function clearSavedHouse() {
  try {
    localStorage.removeItem('hp_house');
  } catch (e) {
    // storage unavailable — nothing to clear
  }
}

function displaySavedHouse() {
  const s = getSavedHouse();
  if (s) {
    result.textContent = 'Sorted as: ' + s;
    result.style.borderLeft = '4px solid rgba(255,255,255,0.04)';
  }
}

displaySavedHouse();

btn.addEventListener('click', () => {
  btn.disabled = true;
  btn.textContent = 'Listening...';
  setTimeout(() => {
    const pick = houses[Math.floor(Math.random() * houses.length)].id;
    result.textContent = 'The Sorting Hat chooses: ' + pick;
    result.style.borderLeft = '6px solid rgba(255,255,255,0.06)';
    saveHouse(pick);
    btn.disabled = false;
    btn.textContent = 'Put on the Sorting Hat';
  }, 1300);
});

// Patronus Generator Logic
const patronusAnimals = [
  { 
    name: "Stag", 
    description: "A stag represents purity, leadership, and protection. Those with a stag patronus are often natural leaders who inspire others.",
    emoji: "🦌"
  },
  { 
    name: "Doe", 
    description: "A doe symbolizes gentleness, intuition, and unconditional love. Those with a doe patronus are often deeply caring and empathetic.",
    emoji: "🐇"
  },
  { 
    name: "Phoenix", 
    description: "A phoenix represents rebirth, renewal, and resilience. Those with a phoenix patronus overcome great challenges with grace.",
    emoji: "🐦"
  },
  { 
    name: "Otter", 
    description: "An otter signifies playfulness, joy, and adaptability. Those with an otter patronus find joy in simple things and are quick thinkers.",
    emoji: "🦦"
  },
  { 
    name: "Wolf", 
    description: "A wolf symbolizes loyalty, intelligence, and strong family bonds. Those with a wolf patronus are fiercely protective of loved ones.",
    emoji: "🐺"
  },
  { 
    name: "Dragon", 
    description: "A dragon represents power, wisdom, and ancient knowledge. Those with a dragon patronus have great inner strength and determination.",
    emoji: "🐉"
  },
  { 
    name: "Unicorn", 
    description: "A unicorn symbolizes purity, magic, and grace. Those with a unicorn patronus have a strong connection to magical forces.",
    emoji: "🦄"
  },
  { 
    name: "Lion", 
    description: "A lion represents courage, nobility, and strength. Those with a lion patronus are natural leaders who face challenges head-on.",
    emoji: "🦁"
  },
  { 
    name: "Dolphin", 
    description: "A dolphin symbolizes harmony, friendship, and intelligence. Those with a dolphin patronus are great communicators and peacemakers.",
    emoji: "🐬"
  },
  { 
    name: "Horse", 
    description: "A horse represents freedom, power, and grace. Those with a horse patronus value independence and have strong willpower.",
    emoji: "🐎"
  }
];

const patronusBtn = document.getElementById('patronusBtn');
const patronusResult = document.getElementById('patronusResult');
const patronusDescription = document.getElementById('patronusDescription');
const animalSilhouette = document.getElementById('animalSilhouette');

function getSavedPatronus() {
  try {
    return localStorage.getItem('hp_patronus');
  } catch (e) {
    return null;
  }
}

function savePatronus(patronus) {
  try {
    localStorage.setItem('hp_patronus', JSON.stringify(patronus));
  } catch (e) {
    // storage unavailable (e.g. private browsing) — silently skip
  }
}

function clearSavedPatronus() {
  try {
    localStorage.removeItem('hp_patronus');
  } catch (e) {
    // storage unavailable — nothing to clear
  }
}

function displaySavedPatronus() {
  const saved = getSavedPatronus();
  if (saved) {
    const patronus = JSON.parse(saved);
    patronusResult.textContent = `Your patronus is a ${patronus.name}!`;
    patronusDescription.textContent = patronus.description;
    animalSilhouette.textContent = patronus.emoji;
    animalSilhouette.style.opacity = "1";
    animalSilhouette.style.animation = "patronusAppear 1.5s ease-out, glow 3s infinite";
  }
}

function generatePatronus() {
  // Disable button during animation
  patronusBtn.disabled = true;
  patronusBtn.textContent = "Conjuring...";
  
  // Clear previous result
  patronusResult.textContent = "Expecto Patronum!";
  patronusDescription.textContent = "";
  animalSilhouette.style.opacity = "0";
  animalSilhouette.style.animation = "none";
  
  // Create sparkle effect
  createSparkles();
  
  // After a delay, reveal the patronus
  setTimeout(() => {
    const randomAnimal = patronusAnimals[Math.floor(Math.random() * patronusAnimals.length)];
    
    patronusResult.textContent = `Your patronus is a ${randomAnimal.name}!`;
    patronusDescription.textContent = randomAnimal.description;
    animalSilhouette.textContent = randomAnimal.emoji;
    animalSilhouette.style.opacity = "1";
    animalSilhouette.style.animation = "patronusAppear 1.5s ease-out, glow 3s infinite";
    
    // Re-enable button
    patronusBtn.disabled = false;
    patronusBtn.textContent = "Expecto Patronum!";
    
    // Save to localStorage
    savePatronus(randomAnimal);
  }, 3000);
}

// Create sparkle animation
function createSparkles() {
  const animationContainer = document.getElementById('patronusAnimation');
  
  // Clear previous sparkles
  const existingSparkles = animationContainer.querySelectorAll('.sparkle');
  existingSparkles.forEach(sparkle => sparkle.remove());
  
  if (prefersReducedMotion) return;
  
  // Create new sparkles
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = (Math.random() * 2) + 's';
    sparkle.style.animationDuration = (1 + Math.random() * 2) + 's';
    animationContainer.appendChild(sparkle);
  }
}

// Initialize patronus on page load
displaySavedPatronus();
patronusBtn.addEventListener('click', generatePatronus);

// Marauder's Map Logic (SVG parchment version)
const svgNS = "http://www.w3.org/2000/svg";
const corridorsG = document.getElementById("corridors");
const locationsG = document.getElementById("locations");
const walkersG = document.getElementById("walkers");

const mapLocations = [
  { name: "Gryffindor Tower", x: 620, y: 110 },
  { name: "Great Hall", x: 380, y: 150 },
  { name: "Owlery", x: 700, y: 220 },
  { name: "Prefects' Bath", x: 520, y: 260 },
  { name: "Room of Requirement", x: 260, y: 260 },
  { name: "Dungeons", x: 380, y: 420 },
  { name: "Astronomy Tower", x: 650, y: 400 },
  { name: "Hagrid's Hut", x: 150, y: 440 },
  { name: "Whomping Willow", x: 130, y: 320 },
  { name: "Forbidden Forest", x: 90, y: 520 }
];

const mapNames = [
  "Harry Potter", "Hermione Granger", "Ron Weasley", "Draco Malfoy",
  "Severus Snape", "Minerva McGonagall", "Neville Longbottom",
  "Luna Lovegood", "Ginny Weasley", "Albus Dumbledore"
];

// draw faint static corridors connecting nearby locations
function mapDist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
for (let i = 0; i < mapLocations.length; i++) {
  for (let j = i + 1; j < mapLocations.length; j++) {
    if (mapDist(mapLocations[i], mapLocations[j]) < 260) {
      const line = document.createElementNS(svgNS, "path");
      line.setAttribute("class", "corridor");
      line.setAttribute("d", `M ${mapLocations[i].x} ${mapLocations[i].y} L ${mapLocations[j].x} ${mapLocations[j].y}`);
      corridorsG.appendChild(line);
    }
  }
}

// draw location dots + labels
mapLocations.forEach(loc => {
  const ring = document.createElementNS(svgNS, "circle");
  ring.setAttribute("class", "loc-ring");
  ring.setAttribute("cx", loc.x); ring.setAttribute("cy", loc.y); ring.setAttribute("r", 9);
  locationsG.appendChild(ring);

  const dot = document.createElementNS(svgNS, "circle");
  dot.setAttribute("class", "loc-dot");
  dot.setAttribute("cx", loc.x); dot.setAttribute("cy", loc.y); dot.setAttribute("r", 3);
  locationsG.appendChild(dot);

  const label = document.createElementNS(svgNS, "text");
  label.setAttribute("class", "loc-label");
  label.setAttribute("x", loc.x + 12);
  label.setAttribute("y", loc.y + 4);
  label.setAttribute("font-size", "11");
  label.textContent = loc.name;
  locationsG.appendChild(label);
});

let mapActive = false;
let mapSpawnTimer = null;
let mapUsedNames = new Set();

function spawnWalker() {
  const availableNames = mapNames.filter(n => !mapUsedNames.has(n));
  if (availableNames.length === 0) return;
  const name = availableNames[Math.floor(Math.random() * availableNames.length)];
  mapUsedNames.add(name);

  const a = mapLocations[Math.floor(Math.random() * mapLocations.length)];
  let b = mapLocations[Math.floor(Math.random() * mapLocations.length)];
  while (b === a) b = mapLocations[Math.floor(Math.random() * mapLocations.length)];

  const mid = {
    x: (a.x + b.x) / 2 + (Math.random() - 0.5) * 90,
    y: (a.y + b.y) / 2 + (Math.random() - 0.5) * 90
  };

  // guide path is only used to sample points/tangents along the curve — never shown
  const guide = document.createElementNS(svgNS, "path");
  guide.setAttribute("d", `M ${a.x} ${a.y} Q ${mid.x} ${mid.y} ${b.x} ${b.y}`);
  walkersG.appendChild(guide);
  const len = guide.getTotalLength();

  const stepSpacing = 15; // px between alternating footprints
  const stepCount = Math.max(2, Math.round(len / stepSpacing));

  const group = document.createElementNS(svgNS, "g");
  group.setAttribute("class", "walker-group");
  walkersG.appendChild(group);

  const label = document.createElementNS(svgNS, "text");
  label.setAttribute("class", "walker-label");
  label.setAttribute("font-size", "12");
  label.textContent = name;
  group.appendChild(label);

  const footprints = [];
  for (let i = 0; i <= stepCount; i++) {
    const dist = Math.min(i * stepSpacing, len);
    const pt = guide.getPointAtLength(dist);
    const aheadPt = guide.getPointAtLength(Math.min(dist + 1, len));
    const angleDeg = Math.atan2(aheadPt.y - pt.y, aheadPt.x - pt.x) * 180 / Math.PI;
    const perpRad = (angleDeg + 90) * Math.PI / 180;
    const side = i % 2 === 0 ? 1 : -1;
    const fx = pt.x + Math.cos(perpRad) * 3 * side;
    const fy = pt.y + Math.sin(perpRad) * 3 * side;

    const fp = document.createElementNS(svgNS, "g");
    fp.setAttribute("class", "footstep");
    fp.setAttribute("transform", `translate(${fx.toFixed(2)} ${fy.toFixed(2)}) rotate(${angleDeg.toFixed(1)})`);

    const heel = document.createElementNS(svgNS, "ellipse");
    heel.setAttribute("rx", "2.4");
    heel.setAttribute("ry", "1.5");
    fp.appendChild(heel);

    const toe = document.createElementNS(svgNS, "ellipse");
    toe.setAttribute("cx", "3.2");
    toe.setAttribute("rx", "1.2");
    toe.setAttribute("ry", "0.9");
    fp.appendChild(toe);

    group.appendChild(fp);
    footprints.push({ el: fp, x: fx, y: fy, cx: pt.x, cy: pt.y });
  }

  guide.remove();

  // scale duration by distance so the pace reads as walking speed rather than
  // teleporting across long stretches of castle in the same time as short ones
  const walkSpeed = 38; // px/sec at this map's scale
  let totalDuration = (len / walkSpeed) * 1000;
  totalDuration *= 0.9 + Math.random() * 0.2;
  totalDuration = Math.max(4500, Math.min(totalDuration, 16000));

  const stepDelay = totalDuration / footprints.length;
  let labelShown = false;

  footprints.forEach((fp, i) => {
    setTimeout(() => {
      if (!mapActive) return;
      fp.el.classList.add("visible");
      // label follows the path's centerline, not the alternating footprint
      // offsets, so it glides smoothly instead of stepping left/right
      label.setAttribute("x", fp.cx + 9);
      label.setAttribute("y", fp.cy - 9);
      if (!labelShown) {
        label.classList.add("visible");
        labelShown = true;
      }
      if (i === footprints.length - 1) {
        setTimeout(() => {
          if (!mapActive) return;
          group.classList.add("fade-out");
          setTimeout(() => {
            group.remove();
            mapUsedNames.delete(name);
          }, 1400);
        }, 1800);
      }
    }, i * stepDelay);
  });
}

const activateBtn = document.getElementById("activateBtn");
const clearBtn = document.getElementById("clearBtn");
const veil = document.getElementById("veil");
const phrase = document.getElementById("phrase");

function activateMap() {
  if (mapActive) return;
  mapActive = true;
  veil.classList.add("hidden");
  phrase.classList.add("show");
  setTimeout(() => phrase.classList.remove("show"), 3200);
  activateBtn.disabled = true;
  clearBtn.disabled = false;

  spawnWalker();
  mapSpawnTimer = setInterval(() => {
    if (walkersG.querySelectorAll(".walker-label").length < 4) {
      spawnWalker();
    }
  }, 1800);
}

function clearMap() {
  mapActive = false;
  clearInterval(mapSpawnTimer);
  mapSpawnTimer = null;
  mapUsedNames.clear();
  walkersG.innerHTML = "";
  veil.classList.remove("hidden");
  activateBtn.disabled = false;
  clearBtn.disabled = true;
}

activateBtn.addEventListener("click", activateMap);
clearBtn.addEventListener("click", clearMap);

// Utility functions
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function resetAll() {
  clearSavedHouse();
  clearSavedPatronus();
  result.textContent = 'Not sorted yet';
  result.style.borderLeft = 'none';
  patronusResult.textContent = 'Your patronus awaits discovery...';
  patronusDescription.textContent = '';
  animalSilhouette.style.opacity = '0';
  animalSilhouette.style.animation = 'none';
  if (mapActive) clearMap();
  setTimeout(() => {
    location.reload();
  }, 1000);
}

// House Cup Points tracker
const pointsHouses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
const pointsValueEls = {
  Gryffindor: document.getElementById('pointsGryffindor'),
  Slytherin: document.getElementById('pointsSlytherin'),
  Ravenclaw: document.getElementById('pointsRavenclaw'),
  Hufflepuff: document.getElementById('pointsHufflepuff')
};
const pointsResetBtn = document.getElementById('pointsResetBtn');

function getSavedPoints() {
  try {
    const raw = localStorage.getItem('hp_points');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function savePoints(points) {
  try {
    localStorage.setItem('hp_points', JSON.stringify(points));
  } catch (e) {
    // storage unavailable — silently skip
  }
}

let housePoints = getSavedPoints() || { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };

function renderPoints(bumpHouse) {
  pointsHouses.forEach(house => {
    const el = pointsValueEls[house];
    if (!el) return;
    el.textContent = housePoints[house];
    if (house === bumpHouse) {
      el.classList.remove('bump');
      // force reflow so the animation can retrigger on repeated clicks
      void el.offsetWidth;
      el.classList.add('bump');
    }
  });
}

document.querySelectorAll('.points-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const house = btn.dataset.house;
    housePoints[house] = (housePoints[house] || 0) + 10;
    savePoints(housePoints);
    renderPoints(house);
  });
});

if (pointsResetBtn) {
  pointsResetBtn.addEventListener('click', () => {
    housePoints = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
    savePoints(housePoints);
    renderPoints();
  });
}

renderPoints();

// Timetable generator
const timetableBtn = document.getElementById('timetableBtn');
const timetableList = document.getElementById('timetableList');

const hogwartsSubjects = [
  { name: 'Transfiguration', teacher: 'Professor McGonagall', room: 'Transfiguration Courtyard' },
  { name: 'Potions', teacher: 'Professor Snape', room: 'The Dungeons' },
  { name: 'Charms', teacher: 'Professor Flitwick', room: 'Charms Classroom' },
  { name: 'Herbology', teacher: 'Professor Sprout', room: 'The Greenhouses' },
  { name: 'Defence Against the Dark Arts', teacher: 'Staff rotates yearly', room: 'DADA Classroom' },
  { name: 'History of Magic', teacher: 'Professor Binns', room: 'History of Magic Classroom' },
  { name: 'Astronomy', teacher: 'Professor Sinistra', room: 'Astronomy Tower' },
  { name: 'Care of Magical Creatures', teacher: 'Rubeus Hagrid', room: "Hagrid's Hut" },
  { name: 'Divination', teacher: 'Professor Trelawney', room: 'North Tower' },
  { name: 'Flying Lessons', teacher: 'Madam Hooch', room: 'The Quidditch Pitch' }
];

const timetableSlots = ['9:00 AM', '10:15 AM', '11:30 AM', '1:30 PM', '3:00 PM'];

function shuffledSubjects() {
  const pool = [...hogwartsSubjects];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

function generateTimetable() {
  const todaysClasses = shuffledSubjects().slice(0, 4);
  timetableList.innerHTML = '';
  todaysClasses.forEach((cls, i) => {
    const item = document.createElement('li');
    item.className = 'timetable-item';
    item.style.animationDelay = (i * 0.1) + 's';
    item.innerHTML = `
      <span class="timetable-time">${timetableSlots[i]}</span>
      <span class="timetable-subject">${cls.name}</span>
      <span class="timetable-meta">${cls.teacher} · ${cls.room}</span>
    `;
    timetableList.appendChild(item);
  });
}

if (timetableBtn) {
  timetableBtn.addEventListener('click', generateTimetable);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  displaySavedHouse();
  displaySavedPatronus();
});
