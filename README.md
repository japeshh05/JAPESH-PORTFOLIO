# Japesh — Engineer in the Making (Personal Portfolio)

> A modern, responsive personal portfolio for **Japesh**, Mechanical Engineering student at **Coimbatore Institute of Technology (CIT)** and Governor's **Rajya Puraskar** awardee.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Self-hosted Space Grotesk, Inter, and JetBrains Mono via Fontsource
- **Deployment**: [Vercel](https://vercel.com/) with strict Content-Security-Policy headers

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Audit
```bash
npm audit --audit-level=high
npm run build
npm run preview
```

---

## 📁 Content Customization

All personal details, scores, milestones, and achievements are centralized in **one single file**:
```
src/data/profile.ts
```
Edit this file to update your bio, contact email, social links, or academic scores.

---

## 🔒 Security

- Zero third-party tracking scripts
- No `dangerouslySetInnerHTML`
- Strict CSP and security headers pre-configured in `vercel.json`
- Zero external fonts (all fonts bundled locally)
- Zero high/critical npm vulnerabilities

---

## 📄 License
MIT
