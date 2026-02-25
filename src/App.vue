<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue"
import { profile, projects, caseStudies, skills } from "./data/portfolio"
import profileImage from "./assets/profile.png"

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "documents", label: "Documents" },
  { id: "case-studies", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

const isLight = ref(false)

function applyTheme(light) {
  document.body.classList.toggle("light", light)
}

function toggleTheme() {
  isLight.value = !isLight.value
}

onMounted(() => {
  const saved = localStorage.getItem("theme")

  if (saved === "light") {
    isLight.value = true
  } else {
    // default = dark
    isLight.value = false
  }

  applyTheme(isLight.value)
})
watch(isLight, (val) => {
  applyTheme(val)
  localStorage.setItem("theme", val ? "light" : "dark")
})


const activeImage = ref(null)

function openImage(img) {
  activeImage.value = img
}
function closeImage() {
  activeImage.value = null
}

/** --- NEW: hover-to-scroll support --- **/
const scrollers = new Map()      // key -> element
const scrollTimers = new Map()   // key -> interval id

function setScrollerRef(key, el) {
  if (el) scrollers.set(key, el)
  else scrollers.delete(key)
}

function startEdgeScroll(key, dir) {
  stopEdgeScroll(key)

  const el = scrollers.get(key)
  if (!el) return

  // tweak these if you want faster/slower scrolling
  const pxPerTick = 30
  const tickMs = 16 // ~60fps

  const id = window.setInterval(() => {
    el.scrollLeft += dir === "right" ? pxPerTick : -pxPerTick
  }, tickMs)

  scrollTimers.set(key, id)
}

function stopEdgeScroll(key) {
  const id = scrollTimers.get(key)
  if (id) {
    clearInterval(id)
    scrollTimers.delete(key)
  }
}

onBeforeUnmount(() => {
  for (const id of scrollTimers.values()) clearInterval(id)
})
</script>


<template>
  <div class="page">
<header class="header">
  <div class="brand">
    <div class="brandTop">
      <div class="name">{{ profile.name }}</div>

      <!-- THEME TOGGLE -->
      <label class="themeSwitch">
        <input type="checkbox" v-model="isLight" />
        <span class="slider"></span>
      </label>
    </div>

    <div class="title">
      {{ profile.title }} · {{ profile.location }}
    </div>
  </div>

  <!-- RIGHT SIDE -->
  <div class="headerRight">
    <nav class="nav">
      <a
        v-for="s in sections"
        :key="s.id"
        class="navLink"
        :href="'#' + s.id"
      >
        {{ s.label }}
      </a>
    </nav>


  </div>
</header>
    <main class="main">

  <!-- PROFILE IMAGE (over About) -->
  <div class="profileImageWrapper">
    <img
      :src="profileImage"
      alt="Portrait of Sondre Lyngstad"
      class="profileImage"
    />
  </div>

      <section id="about" class="section aboutSection">
        <h2>About</h2>
        <p class="lead">{{ profile.intro }}</p>
        <p class="lead">{{ profile.introProjects }}</p>
        <p class="lead">{{ profile.introMotivation }}</p>


      </section>


      <section id="projects" class="section">
        <div class="sectionHeader">
          <h2>Projects</h2>
          <p class="muted">Selected projects and technical work.</p>
        </div>

        <div class="grid">
          <article v-for="p in projects" :key="p.title" class="card">
            <h3>{{ p.title }}</h3>
           <div
              v-if="p.images?.length"
              class="projectImagesScroller"
              @mouseleave="stopEdgeScroll(p.title)"
            >
              <!-- hover zones -->
              <div
                class="scrollZone left"
                @mouseenter="startEdgeScroll(p.title, 'left')"
                @mouseleave="stopEdgeScroll(p.title)"
              ></div>

              <div
                class="scrollZone right"
                @mouseenter="startEdgeScroll(p.title, 'right')"
                @mouseleave="stopEdgeScroll(p.title)"
              ></div>

              <!-- PUT ref HERE -->
              <div class="projectImages" :ref="(el) => setScrollerRef(p.title, el)">
                <img
                  v-for="(img, i) in p.images"
                  :key="i"
                  :src="img"
                  alt="Project image"
                  class="projectImage"
                  @click="openImage(img)"
                />
              </div>
            </div>

            <p class="muted">{{ p.description }}</p>

            <div class="tags">
            <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
            </div>

            <!-- GitHub (only if it exists) -->
            <div class="links" v-if="p.github">
              <a :href="p.github" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <!-- YouTube demo (only if it exists) -->
            <div v-if="p.demo" class="videoButtonWrapper">
              <a
                :href="p.demo"
                target="_blank"
                rel="noreferrer"
                class="videoButton"
              >
                ▶ Watch on YouTube
              </a>
            </div>

            <!-- PDF report (only if it exists) -->
            <div v-if="p.report" class="reportButtonWrapper">
              <a
                :href="p.report"
                target="_blank"
                rel="noreferrer"
                class="reportButton"
              >
                📄 Read Report (PDF)
              </a>
            </div>


          </article>
        </div>
      </section>




      <section id="documents" class="section documentsSection">
        <div class="sectionHeader">
          <h2>Documents</h2>
          <p class="muted">Downloads: recommendations, transcript, and CV.</p>
        </div>

        <div class="docLinks">
          <a
            class="docCard"
            :href="profile.links.documents.recommendations"
            target="_blank"
            rel="noreferrer"
          >
            <div class="docTitle">Letters of Recommendation</div>
            <div class="muted">PDF</div>
          </a>

          <a
            class="docCard"
            :href="profile.links.documents.transcript"
            target="_blank"
            rel="noreferrer"
          >
            <div class="docTitle">Academic Transcript</div>
            <div class="muted">PDF</div>
          </a>

          <a
            class="docCard"
            :href="profile.links.documents.cv"
            target="_blank"
            rel="noreferrer"
          >
            <div class="docTitle">CV</div>
            <div class="muted">PDF</div>
          </a>
        </div>
      </section>





      <section id="case-studies" class="section">
        <div class="sectionHeader">
          <h2>Case Studies</h2>
          <p class="muted">Problem → solution → result.</p>
        </div>

        <div class="stack">
          <article v-for="c in caseStudies" :key="c.title" class="card">
            <h3>{{ c.title }}</h3>

            <div class="caseGrid">
              <div>
                <div class="kicker">Problem</div>
                <p class="muted">{{ c.problem }}</p>
              </div>
              <div>
                <div class="kicker">Solution</div>
                <p class="muted">{{ c.solution }}</p>
              </div>
              <div>
                <div class="kicker">Result</div>
                <p class="muted">{{ c.result }}</p>
              </div>
            </div>

            <div class="tags">
              <span v-for="t in c.tech" :key="t" class="tag">{{ t }}</span>
            </div>

            <div class="links">
              <a v-if="c.links?.github" :href="c.links.github" target="_blank" rel="noreferrer">GitHub</a>
              <a v-if="c.links?.demo" :href="c.links.demo" target="_blank" rel="noreferrer">Demo</a>
            </div>
          </article>
        </div>
      </section>


      <section id="skills" class="section">
      <div class="sectionHeader">
        <h2>Skills</h2>
        <p class="muted">Cybernetics, automation, and applied data science.</p>
      </div>

      <div class="grid">
        <article class="card">
          <h3>Cybernetics & Control</h3>
          <div class="tags">
            <span v-for="s in skills.cybernetics" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>

        <article class="card">
          <h3>Electrical & Automation</h3>
          <div class="tags">
            <span v-for="s in skills.electricalAutomation" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>

        <article class="card">
          <h3>Programming & Software</h3>
          <div class="tags">
            <span v-for="s in skills.programming" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>

        <article class="card">
          <h3>Simulation & Modeling</h3>
          <div class="tags">
            <span v-for="s in skills.simulationTools" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>

        <article class="card">
          <h3>Data & Machine Learning</h3>
          <div class="tags">
            <span v-for="s in skills.dataML" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>

        <article class="card">
          <h3>Engineering Tools</h3>
          <div class="tags">
            <span v-for="s in skills.engineeringTools" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>
      </div>
    </section>


    <section id="contact" class="section contactSection">
      <h2>Contact</h2>

      <p class="contactLead">
        Get in touch on LinkedIn, email, or phone.
      </p>

      <div class="contactCta">
        <a class="btn" :href="profile.links.linkedin" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a class="btn" :href="profile.links.email">
          Email
        </a>
      </div>

      <div class="contactPhone">
        📞 +47 948 45 006
      </div>
    </section>


    </main>

    <footer class="footer">
      <span class="muted">© {{ new Date().getFullYear() }} {{ profile.name }}</span>
    </footer>
    <div v-if="activeImage" class="imageModal" @click="closeImage">
    <img :src="activeImage" class="imageModalContent" />
    <button class="imageModalClose" @click.stop="closeImage">✕</button>
</div>

  </div>
</template>



<style>


:root {
  --bg: #111827;                 /* dark blue-gray */
  --panel: rgba(255, 255, 255, 0.08);
  --border: rgba(255, 255, 255, 0.18);
  --text: rgba(255, 255, 255, 0.95);
  --muted: rgba(255, 255, 255, 0.70);
}


/* 🔒 iOS Safari flex overflow fix */
.header,
.header * {
  min-width: 0;
}




.page,
.header,
.main,
.section {
  max-width: 100%;
}

.header,
.brand,
.headerRight,



.brand .title {
  overflow-wrap: anywhere;
}

.brandTop {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.docLinks {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
  margin-top: 14px;
}

.docCard {
  grid-column: span 4;
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.docCard:hover {
  transform: translateY(-2px);
  text-decoration: none;
  border-color: rgba(255,255,255,0.22);
}

.docTitle {
  font-size: 15px;
  font-weight: 650;
}





/* Switch container */
.themeSwitch {
  position: relative;
  width: 34px;
  height: 18px;
}

/* Hide native checkbox */
.themeSwitch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Track */
.themeSwitch .slider {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.18);
  border: 1px solid var(--border);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease;
}

/* Thumb */
.themeSwitch .slider::before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--text);
  border-radius: 50%;
  transition: transform 0.25s ease;
}

/* Checked = light mode */
.themeSwitch input:checked + .slider {
  background: rgba(255,255,255,0.35);
}

.themeSwitch input:checked + .slider::before {
  transform: translate(16px, -50%);
}

/* Light mode tuning */
body.light .themeSwitch .slider {
  background: rgba(0,0,0,0.08);
}

.projectImagesScroller {
  position: relative;
  margin: 10px 0 12px;
  max-width: 100%;
  overflow: hidden; /* 🔒 prevents layout widening */
}

.aboutSection .lead {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;   /* controls spacing between paragraphs */
}

.aboutSection .lead:last-of-type {
  margin-bottom: 0;
}

.contactPhone {
  color: var(--muted);
  font-size: 14px;
  margin-top: 6px;   /* increase to 8–12px if you want more space */
}

/* The scrolling row */
.projectImages {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 2px 26px;
  scroll-behavior: smooth;
  max-width: 100%;  /* 🔒 critical for iOS */

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.projectImages::-webkit-scrollbar {
  display: none;                  /* Chrome / Safari */
}

/* Hover zones (invisible but “active”) */
.scrollZone {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  z-index: 2;
}

.scrollZone.left { left: 0; }
.scrollZone.right { right: 0; }

/* Optional: subtle visual hint (remove if you want fully invisible) */
.scrollZone.left:hover,
.scrollZone.right:hover {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.06),
    transparent
  );
}
.scrollZone.right:hover {
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.06),
    transparent
  );
}

/* Images: choose sizing that fits ~4–5 on a card */
.projectImage {
  height: 150px;
  width: 220px;         /* makes it easier to see 4–5 per row */
  border-radius: 10px;
  border: 1px solid var(--border);
  object-fit: cover;
  flex: 0 0 auto;
  background: rgba(0,0,0,0.2);

  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.projectImage:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}


/* Modal overlay */
.imageModal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* Enlarged image */
.imageModalContent {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: #000;
}

/* Close button */
.imageModalClose {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0,0,0,0.6);
  border: 1px solid var(--border);
  color: white;
  font-size: 18px;
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
}


.reportButtonWrapper {
  display: flex;
  justify-content: center;
  margin-top: auto;   /* pushes button to bottom */
  padding-top: 16px;
}

* { box-sizing: border-box; }
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background:
    radial-gradient(1200px 800px at 20% 0%, rgba(120, 100, 255, 0.18), transparent 60%),
    radial-gradient(1000px 700px at 80% 20%, rgba(0, 200, 255, 0.12), transparent 60%),
    var(--bg);
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
}
body.light {
  --bg: #d6dae3;
  --panel: rgba(0, 0, 0, 0.04);
  --border: rgba(0, 0, 0, 0.10);
  --text: rgba(15, 23, 42, 0.95);
  --muted: rgba(15, 23, 42, 0.65);
}

a { color: var(--text); text-decoration: none; }
a:hover { text-decoration: underline; }

.page { width: 100%; max-width: 1040px; margin: 0 auto; padding: 28px 18px 40px; }
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  position: sticky;
  top: 14px;
  z-index: 10;
}
.brand .name { font-size: 18px; font-weight: 700; }
.brand .title { font-size: 13px; color: var(--muted); margin-top: 2px; }

.nav::-webkit-scrollbar {
  display: none;
}

.navLink {
  flex: 0 0 auto;           /* hindrer at linkene krymper */
}

.navLink:hover {
  color: var(--text);
  border-color: var(--border);
  text-decoration: none;
}

.main { padding: 22px 2px 0; }
.section { padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.section:last-child { border-bottom: 0; }

.sectionHeader { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
h2 { margin: 0 0 10px; font-size: 22px; }
h3 { margin: 0 0 10px; font-size: 16px; }

.lead { margin: 0; color: var(--muted); max-width: 70ch; line-height: 1.6; }
.muted { color: var(--muted); line-height: 1.55; }

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
  margin-top: 14px;
}
.card {
  grid-column: span 6;
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 16px;
  padding: 14px;

  display: flex;
  flex-direction: column;
}


.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.tag {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.14);
  color: var(--muted);
  background: rgba(0,0,0,0.18);
}

.links { display: flex; gap: 14px; margin-top: 12px; }
.links a { font-size: 13px; color: var(--text); }

.stack { display: flex; flex-direction: column; gap: 14px; margin-top: 14px; }

.caseGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
  margin-top: 8px;
}
.caseGrid > div { grid-column: span 4; }


.kicker {
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-bottom: 6px;
}

.ctaRow { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(0,0,0,0.25);
  font-size: 13px;
}

.aboutCta {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;   /* 👈 moves the buttons down */
  flex-wrap: wrap;
}
.aboutPhone {
  margin-top: 14px;
  font-size: 14px;
  color: var(--muted);
  text-align: center;
}

.btn:hover { text-decoration: none; border-color: rgba(255,255,255,0.22); }
.profileImageWrapper {
  display: flex;
  justify-content: center;
  margin: 12px 0 8px;
}

.profileImage {
  width: 180px;          /* ca “25%”-følelse */
  height: 180px;
  border-radius: 14px;  /* runde hjørner */
  object-fit: cover;
  border: 1px solid var(--border);
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
}

.aboutSection {
  text-align: center;
}

.aboutSection .lead {
  margin-left: auto;
  margin-right: auto;
}



.footer { padding-top: 18px; }

/* iPhone: prevent any horizontal overflow that triggers "zoomed" initial scale */
html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* better than hidden on iOS */

}

/* Mobile layout (iPhone/Android) */
@media (max-width: 600px) {
  .page {
    width: 100%;
    padding: 16px 14px 28px;
  }

  /* Header becomes stacked on mobile */
  .header {
    position: relative; /* disable sticky quirks on iOS */
    top: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 12px;
    backdrop-filter: none;
  }

  .brandTop {
    justify-content: space-between;
  }

  .brand .title {
    overflow-wrap: anywhere;
  }

  /* ✅ MOBILE NAV (this fixes the width / zoom issue) */
  .nav {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    white-space: normal;
    gap: 12px;
    overflow-x: visible; /* CRITICAL */
  }

  /* ✅ 1 column cards on mobile (Projects / Skills / etc.) */
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    grid-column: 1 / -1;
  }

  /* ✅ Case studies stacked vertically */
  .caseGrid {
    grid-template-columns: 1fr;
  }

  .caseGrid > div {
    grid-column: 1 / -1;
  }

  /* ✅ Documents cards full width */
  .docCard {
    grid-column: 1 / -1;
  }

  /* Slightly smaller profile image */
  .profileImage {
    width: 150px;
    height: 150px;
  }

  /* Smaller titles on mobile */
  .card h3 {
    font-size: 15px;
    line-height: 1.25;
  }
}
</style>
