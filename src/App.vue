<script setup>
import { profile, projects, caseStudies, skills } from "./data/portfolio"

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]
</script>

<template>
  <div class="page">
    <header class="header">
      <div class="brand">
        <div class="name">{{ profile.name }}</div>
        <div class="title">{{ profile.title }} · {{ profile.location }}</div>
      </div>

      <nav class="nav">
        <a v-for="s in sections" :key="s.id" class="navLink" :href="'#' + s.id">
          {{ s.label }}
        </a>
      </nav>
    </header>

    <main class="main">
      <section id="about" class="section">
        <h2>About</h2>
        <p class="lead">{{ profile.intro }}</p>

        <div class="ctaRow">
          <a class="btn" :href="profile.links.github" target="_blank" rel="noreferrer">GitHub</a>
          <a class="btn" :href="profile.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="btn" :href="profile.links.email">Email</a>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="sectionHeader">
          <h2>Projects</h2>
          <p class="muted">Utvalgte prosjekter med lenker.</p>
        </div>

        <div class="grid">
          <article v-for="p in projects" :key="p.title" class="card">
            <h3>{{ p.title }}</h3>
            <p class="muted">{{ p.description }}</p>

            <div class="tags">
              <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
            </div>

            <div class="links">
              <a :href="p.github" target="_blank" rel="noreferrer">GitHub</a>
              <a v-if="p.demo" :href="p.demo" target="_blank" rel="noreferrer">Demo</a>
            </div>
          </article>
        </div>
      </section>

      <section id="case-studies" class="section">
        <div class="sectionHeader">
          <h2>Case Studies</h2>
          <p class="muted">Problem → løsning → resultat.</p>
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
          <p class="muted">Kategorisert oversikt.</p>
        </div>

        <div class="grid">
          <article class="card">
            <h3>Frontend</h3>
            <div class="tags">
              <span v-for="s in skills.frontend" :key="s" class="tag">{{ s }}</span>
            </div>
          </article>

          <article class="card">
            <h3>Backend</h3>
            <div class="tags">
              <span v-for="s in skills.backend" :key="s" class="tag">{{ s }}</span>
            </div>
          </article>

          <article class="card">
            <h3>Data / AI</h3>
            <div class="tags">
              <span v-for="s in skills.dataAI" :key="s" class="tag">{{ s }}</span>
            </div>
          </article>

          <article class="card">
            <h3>DevOps</h3>
            <div class="tags">
              <span v-for="s in skills.devops" :key="s" class="tag">{{ s }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section">
        <h2>Contact</h2>
        <p class="muted">
          Ta kontakt på email eller connect på LinkedIn.
        </p>

        <div class="ctaRow">
          <a class="btn" :href="profile.links.email">Email</a>
          <a class="btn" :href="profile.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="btn" :href="profile.links.github" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span class="muted">© {{ new Date().getFullYear() }} {{ profile.name }}</span>
    </footer>
  </div>
</template>

<style>
:root {
  --bg: #0b0c10;
  --panel: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.12);
  --text: rgba(255, 255, 255, 0.92);
  --muted: rgba(255, 255, 255, 0.68);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: radial-gradient(1200px 800px at 20% 0%, rgba(120, 100, 255, 0.18), transparent 60%),
              radial-gradient(1000px 700px at 80% 20%, rgba(0, 200, 255, 0.12), transparent 60%),
              var(--bg);
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
}

a { color: var(--text); text-decoration: none; }
a:hover { text-decoration: underline; }

.page { max-width: 1040px; margin: 0 auto; padding: 28px 18px 40px; }
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

.nav { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; }
.navLink {
  font-size: 13px;
  color: var(--muted);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
}
.navLink:hover { color: var(--text); border-color: var(--border); text-decoration: none; }

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
}
@media (max-width: 860px) {
  .card { grid-column: span 12; }
  .header { position: relative; top: 0; }
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
@media (max-width: 860px) {
  .caseGrid > div { grid-column: span 12; }
}

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
.btn:hover { text-decoration: none; border-color: rgba(255,255,255,0.22); }

.footer { padding-top: 18px; }
</style>
