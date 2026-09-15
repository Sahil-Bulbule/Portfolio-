# Sahil Bulbule — Portfolio

A cinematic, scroll-driven personal portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion.

## Run it

```bash
npm install
npm run dev
``` 

Then open the local URL Vite prints (usually http://localhost:5173). 

To build for production:

```bash 
npm run build
```

## Project structure

```
src/
  components/   All page sections (Navbar, Hero, About, Stats, Skills,
                Projects, Education, Internship, LearningJourney,
                GithubSection, Contact, Footer, plus CustomCursor and
                ScrollProgress)
  data/
    skills.js     Skill list — name, category, shape, color
    projects.js   Project list — copy, tech, features, links, accent colors
  index.css       Global styles, fonts, grid/glass helpers, reduced-motion
  App.jsx         Wires all sections together in order
```

## Replacing placeholders

- **Profile portrait**: in `About.jsx`, the box that says "Profile portrait —
  replace me" — swap it for an `<img>` tag pointing at your photo in
  `src/assets/`.
- **Hero visual**: in `Hero.jsx`, the circular "SB" glass orb is a stand-in.
  Replace the `<span>SB</span>` with an `<img>` or illustration, keeping the
  same wrapping `motion.div` so the floating tech bubbles still orbit it.
- **Project screenshots**: in `src/data/projects.js`, nothing needs to
  change there — just open `Projects.jsx` and replace the placeholder
  `<span>` inside each project's image `motion.div` with a real
  `<img src="..." />`. Keep the aspect ratio (`aspect-[4/3]`) for consistent
  layout.
- **Internship certificate**: in `Internship.jsx`, replace the placeholder
  text inside the tilting glass card with an `<img>` of your certificate.
- **GitHub / LinkedIn / email**: search the project for `href="#"` next to
  GitHub/LinkedIn icons (Navbar isn't linked, but Hero, Contact, and
  Footer are) and swap in your real profile URLs. In `Contact.jsx`, update
  `mailto:youremail@example.com` with your real email.
- **Resume link**: in `Navbar.jsx`, the "Resume ↗" button currently points
  to `href="#"` — point it at your hosted resume PDF.
- **GitHub username**: `GithubSection.jsx` shows `@sahil-16-01` and links
  to `https://github.com/sahil-16-01` — update both if that's not your
  handle.

## Notes

- Respects `prefers-reduced-motion` (see `index.css`).
- Custom cursor and heavy parallax automatically disable on touch devices.
- Skills constellation switches to a stacked, categorized layout on mobile.
- Colors and shapes for each skill live in `src/data/skills.js` — add or
  edit entries there rather than in the component.
