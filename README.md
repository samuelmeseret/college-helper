# README

A minimal, sleek portfolio built with **React + Vite** and **React Router**, with a subtle **black rain** animated background. Home page shows your name and links; About page for your bio. Runs great on Windows 11 in VS Code.

---

## Quick Start (Windows 11 + VS Code)

1. **Create the app**
   ```bash
   npm create vite@latest my-portfolio -- --template react
   cd my-portfolio
   npm install
   npm i react-router-dom
   ```
2. **Replace the files** below into your project, matching the paths.
3. **Run it**
   ```bash
   npm run dev
   ```
4. Open the shown **localhost** URL.

---

## Files

### package.json (only the relevant bits)
> (Vite already generates this. After installing `react-router-dom` you should be set.)

---

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Samuel Meseret — Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### src/main.jsx
```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

---

### src/App.jsx
```jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <div className="app-shell">
      {/* Animated background layers */}
      <div className="rain-layer" aria-hidden="true"></div>
      <div className="grain-layer" aria-hidden="true"></div>

      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Samuel Meseret</footer>
    </div>
  )
}
```

---

### src/components/Header.jsx
```jsx
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="brand">Samuel Meseret</NavLink>
      <nav className="nav">
        <NavLink to="/" className={({isActive}) => isActive ? 'link active' : 'link'}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'link active' : 'link'}>About</NavLink>
      </nav>
    </header>
  )
}
```

---

### src/pages/Home.jsx
```jsx
export default function Home() {
  return (
    <section className="section home">
      <h1 className="headline">Samuel Meseret</h1>
      <p className="sub">High school developer • React | Python | JS • Aspiring LLM builder</p>

      <div className="cta-row">
        {/* Update these with your real links */}
        <a
          className="button"
          href="https://www.linkedin.com/in/YOUR-LINKEDIN"
          target="_blank" rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="button ghost" href="mailto:youremail@example.com">Email me</a>
      </div>
    </section>
  )
}
```

---

### src/pages/About.jsx
```jsx
export default function About() {
  return (
    <section className="section about">
      <h2>About Me</h2>
      <p>
        I’m Samuel Meseret, a student at Oakland Technical High School. I build web apps with
        React, JavaScript, and Python, and I’m working toward creating my own large language
        model one day. I’ve coded plenty of projects, from interactive UIs to data-driven tools,
        and I’m always learning new stacks.
      </p>
      <p>
        When I’m not writing code, I’m exploring AI concepts, improving my developer workflow,
        and polishing projects for hackathons and school. If you’re into building cool things or
        want to collaborate, hit my LinkedIn or email from the home page.
      </p>
    </section>
  )
}
```

---

### src/styles.css
```css
/* ===== Base reset & type ===== */
* { box-sizing: border-box; }
html, body, #root { height: 100%; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  color: #e9e9e9;
  background: #0a0a0a;
  overflow-x: hidden;
}

/* ===== Layout ===== */
.app-shell { position: relative; min-height: 100dvh; }
.container { width: min(1100px, 92%); margin: 0 auto; padding: 96px 0 120px; position: relative; z-index: 2; }
.footer { position: sticky; top: 100%; padding: 24px 0; text-align: center; color: #9aa0a6; z-index: 2; }

/* ===== Header ===== */
.header {
  position: sticky; top: 0; z-index: 3; backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px min(1100px, 92% - 0%); margin: 0 auto; height: 64px;
}
.brand { color: #f1f3f4; text-decoration: none; font-weight: 700; letter-spacing: 0.3px; }
.nav { display: flex; gap: 16px; }
.link { color: #c4c7c5; text-decoration: none; padding: 8px 12px; border-radius: 10px; transition: 150ms ease; }
.link:hover { background: rgba(255,255,255,0.06); color: #fff; }
.link.active { background: rgba(255,255,255,0.12); color: #fff; }

/* ===== Hero / sections ===== */
.section { display: grid; gap: 18px; }
.home { place-items: center; text-align: center; padding-top: 64px; }
.headline { font-size: clamp(2.4rem, 6vw, 4rem); line-height: 1.05; margin: 0; letter-spacing: -0.02em; }
.sub { color: #b9bfc6; margin: 0; }

.cta-row { display: flex; gap: 12px; justify-content: center; margin-top: 10px; }
.button {
  appearance: none; border: none; cursor: pointer; text-decoration: none;
  padding: 12px 16px; border-radius: 12px; font-weight: 600; letter-spacing: .2px;
  background: #e8eaed; color: #111; transition: transform .1s ease, filter .2s ease, background .2s ease;
}
.button:hover { filter: brightness(0.95); transform: translateY(-1px); }
.button:active { transform: translateY(0); }
.button.ghost { background: transparent; color: #e8eaed; outline: 1px solid rgba(232,234,237,0.22); }
.button.ghost:hover { background: rgba(255,255,255,0.06); }

.about h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); margin: 0; }
.about p { color: #c4c7c5; max-width: 68ch; }

/* ===== Black Rain Background ===== */
/* Two layers: subtle vertical "rain" streaks + ultra-fine grain for depth */
.rain-layer, .grain-layer {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
}

/* Vertical lines that drift downward */
.rain-layer {
  background-image:
    repeating-linear-gradient(180deg,
      rgba(255,255,255,0.06) 0px,
      rgba(255,255,255,0.06) 1px,
      transparent 1px,
      transparent 6px
    );
  animation: rainMove 0.8s linear infinite;
  opacity: 0.18;
}

@keyframes rainMove {
  to { background-position-y: 6px; }
}

/* Fine film grain for texture */
.grain-layer {
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>\
      <filter id='n'>\
        <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/>\
        <feColorMatrix type='saturate' values='0'/>\
      </filter>\
      <rect width='100%' height='100%' filter='url(%23n)' opacity='0.15'/>\
    </svg>");
  background-size: 200px 200px;
  opacity: 0.25;
  mix-blend-mode: soft-light;
}

/* ===== Utilities ===== */
@media (max-width: 560px) {
  .header { padding: 12px 16px; }
  .container { padding: 72px 0 96px; }
}
```

---

## What to Edit
- **Home.jsx** → Put your real **LinkedIn URL** and **email**.
- **About.jsx** → Customize your bio.
- **Header.jsx** → Change the brand text if you want initials or a logo.

## Optional Enhancements
- Add a **Projects** page and cards.
- Add a **Resume** link (PDF in `/public`).
- Swap fonts by adding a Google Font in `index.html`.
