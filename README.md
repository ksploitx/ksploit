<div align="center">

```
██╗  ██╗███████╗██████╗ ██╗      ██████╗ ██╗████████╗██╗  ██╗
██║ ██╔╝██╔════╝██╔══██╗██║     ██╔═══██╗██║╚══██╔══╝╚██╗██╔╝
█████╔╝ ███████╗██████╔╝██║     ██║   ██║██║   ██║    ╚███╔╝
██╔═██╗ ╚════██║██╔═══╝ ██║     ██║   ██║██║   ██║    ██╔██╗
██║  ██╗███████║██║     ███████╗╚██████╔╝██║   ██║   ██╔╝ ██╗
╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝ ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝
```

**THE SIGNAL IN THE NOISE.**

_Full-stack developer & AI engineer — security · machine learning · scalable architecture_

[![Live on Cloudflare](https://img.shields.io/badge/LIVE-ksploitx.pages.dev-00ff88?style=for-the-badge&logo=cloudflare&logoColor=black)](https://ksploitx.pages.dev)&nbsp;&nbsp;[![Live on GitHub Pages](https://img.shields.io/badge/MIRROR-khushneetsingh.github.io-ffffff?style=for-the-badge&logo=github&logoColor=black)](https://khushneetsingh.github.io/ksploit)

[![GitHub](https://img.shields.io/badge/GitHub-KhushneetSingh-181717?style=flat-square&logo=github)](https://github.com/KhushneetSingh)&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Khushneet_Singh-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/khushneet-singh)&nbsp;
[![X](https://img.shields.io/badge/Singh0Khushneet-000000?style=flat-square&logo=x)](https://x.com/Singh0Khushneet)&nbsp;
[![Email](https://img.shields.io/badge/Email-singhkhushneet601@gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:singhkhushneet601@gmail.com)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)&nbsp;
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)&nbsp;
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=flat-square&logo=framer)

</div>

---

## ✦ Overview

A premium developer portfolio with a **dark hacker-terminal aesthetic** — built to look like a system you're not supposed to be inside.

- 🖥️ **Matrix rain** canvas animation on the hero
- ⌨️ **Interactive terminal overlay** with 9+ commands (`sudo hire khushneet` included)
- 📜 **Scroll-driven animations** — no page transitions, pure reveal
- 🎯 **Zero border-radius** — sharp edges, zero compromise
- 🌐 **Dual-deployed** — Cloudflare Pages (primary) + GitHub Pages (mirror)
- 📱 **Mobile-first** responsive across all viewports

---

## ✦ Tech Stack

| Layer      | Technology                         |
| ---------- | ---------------------------------- |
| Framework  | Next.js 16 (App Router)            |
| Language   | TypeScript (strict mode)           |
| Styling    | Tailwind CSS v4                    |
| Animations | Framer Motion 12                   |
| Icons      | Lucide React                       |
| Fonts      | Space Grotesk · Inter · Geist Mono |
| Deployment | Cloudflare Pages · GitHub Pages    |

---

## ✦ Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Global fonts, metadata, OG tags
│   ├── page.tsx              # Assembles all sections
│   └── globals.css           # Design system, grid bg, scanlines
├── components/
│   ├── Navbar.tsx            # Transparent → blur navbar + terminal btn
│   ├── sections/
│   │   ├── Hero.tsx          # Full viewport hero with matrix rain
│   │   ├── Projects.tsx      # Sticky scroll card deck
│   │   ├── Skills.tsx        # Staggered typewriter skill grid
│   │   ├── About.tsx         # Timeline with alternating cards
│   │   └── Contact.tsx       # Resume download + social links
│   └── ui/
│       ├── Terminal.tsx       # Full-screen terminal overlay
│       ├── ProjectCard.tsx    # Project display card
│       ├── SkillBadge.tsx     # Individual skill badge
│       └── SectionWrapper.tsx # Scroll-reveal wrapper
├── data/
│   ├── projects.ts           # Project entries
│   ├── skills.ts             # Skill categories
│   └── about.ts              # Timeline items
└── types/
    └── index.ts              # TypeScript interfaces
```

---

## ✦ Terminal Commands

Hit **TERMINAL_ACCESS** in the navbar to drop into the shell.

| Command               | Output                  |
| --------------------- | ----------------------- |
| `help`                | All available commands  |
| `whoami`              | Operator identity & bio |
| `projects`            | Deployed systems list   |
| `skills`              | ASCII skill matrix      |
| `contact`             | Communication channels  |
| `status`              | Current system status   |
| `clear`               | Wipe the terminal       |
| `exit` / `quit`       | Close overlay           |
| `sudo hire khushneet` | 🥚                      |

---

## ✦ Getting Started

```bash
# Clone
git clone https://github.com/KhushneetSingh/ksploit.git
cd ksploit

# Install
npm install

# Dev server → http://localhost:3000
npm run dev
```

---

## ✦ Deployment

### Cloudflare Pages (Primary)

Connected to `main` branch. Every push auto-deploys.

```
Build command:  npm run build
Output dir:     .next
```

### GitHub Pages (Mirror)

Static export via GitHub Actions. Triggers on every push to `main`.

```bash
# Build static export locally (for testing)
npm run build:gh
```

The workflow lives at `.github/workflows/deploy-gh-pages.yml` and publishes to the `gh-pages` branch automatically.

| URL                                                                            | Host             |
| ------------------------------------------------------------------------------ | ---------------- |
| [ksploitx.pages.dev](https://ksploitx.pages.dev)                               | Cloudflare Pages |
| [khushneetsingh.github.io/ksploit](https://khushneetsingh.github.io/ksploit) | GitHub Pages     |

---

## ✦ Design Tokens

| Token         | Value              |
| ------------- | ------------------ |
| Background    | `#131313`          |
| Surface       | `#1a1a1a`          |
| Accent Green  | `#00ff88`          |
| Accent Cyan   | `#00d4ff`          |
| Muted         | `#666666`          |
| Grid Size     | `24px`             |
| Border Radius | `0px` — everywhere |

---

<div align="center">
  <code>© 2026 KSPLOITX // ALL_SYSTEMS_OPERATIONAL</code>
</div>
