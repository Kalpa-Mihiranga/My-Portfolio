# 🚀 PORTFOLIO — COMPLETE SETUP GUIDE

## Tech Stack
| Layer | Technology | Why |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | File-based routing, SSG, best React framework |
| Styling | **Tailwind CSS v3** | Utility-first, matches your design tokens exactly |
| Animations | **Framer Motion** | Production-grade animations, scroll triggers |
| Icons | **Lucide React** | Lightweight, consistent icon set |
| Fonts | **Google Fonts** (JetBrains Mono + Space Grotesk) | Matches the tech-architect aesthetic |
| Language | **TypeScript** | Type safety, better DX |
| Deployment | **Vercel** (free) | Zero-config, instant deploys |

---

## 📁 Folder Structure
```
portfolio/
├── public/                     # Static assets (images, resume.pdf)
│   └── resume.pdf
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (nav + footer)
│   │   ├── page.tsx            # Home page
│   │   ├── projects/page.tsx   # Projects page
│   │   ├── experience/page.tsx # About/Experience page
│   │   ├── contact/page.tsx    # Contact page
│   │   └── globals.css         # Global styles + CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed top navigation
│   │   │   └── Footer.tsx      # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Home hero
│   │   │   ├── ProjectCard.tsx # Reusable project card
│   │   │   └── SkillBento.tsx  # Skills bento grid
│   │   └── ui/
│   │       ├── GlassPanel.tsx  # Reusable glass card
│   │       ├── Tag.tsx         # Tech tag pill
│   │       └── AnimatedText.tsx
│   └── lib/
│       └── data.ts             # All your content (projects, skills, etc.)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ⚙️ Step 1: Prerequisites

Install these first:
- **Node.js 18+**: https://nodejs.org/
- **VS Code**: https://code.visualstudio.com/

### Recommended VS Code Extensions:
1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **TypeScript Importer**
5. **Auto Rename Tag**

---

## ⚙️ Step 2: Create the Project

Open VS Code terminal (`Ctrl + \``) and run:

```bash
# Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Go into the folder
cd portfolio

# Install additional packages
npm install framer-motion lucide-react clsx

# Open in VS Code
code .
```

When prompted during setup:
- TypeScript? → **Yes**
- ESLint? → **Yes**
- Tailwind CSS? → **Yes**
- `src/` directory? → **Yes**
- App Router? → **Yes**
- Import alias? → **Yes** (default `@/*`)

---

## ⚙️ Step 3: Copy All Files

Replace/create each file from the code files provided in this guide.
Copy them in this order:
1. `tailwind.config.ts`
2. `src/app/globals.css`
3. `src/lib/data.ts` ← **Edit this with YOUR info**
4. `src/components/layout/Navbar.tsx`
5. `src/components/layout/Footer.tsx`
6. `src/app/layout.tsx`
7. `src/app/page.tsx`
8. `src/app/projects/page.tsx`
9. `src/app/experience/page.tsx`
10. `src/app/contact/page.tsx`

---

## ⚙️ Step 4: Run Locally

```bash
npm run dev
```

Visit: **http://localhost:3000**

---

## ⚙️ Step 5: Customize Your Info

Open `src/lib/data.ts` and update:
- Your name and title
- Project details (name, description, tech stack, links)
- Education history
- Skills
- Social links (GitHub, LinkedIn, email)

---

## ⚙️ Step 6: Add Your Resume

Place your resume PDF at: `public/resume.pdf`

---

## ⚙️ Step 7: Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at **vercel.com** — auto-deploys on every push.

---

## 🎨 Customization Tips

### Change accent color:
In `tailwind.config.ts`, change `primary: "#adc6ff"` to your preferred color.

### Add a project:
In `src/lib/data.ts`, add an object to the `projects` array.

### Change fonts:
In `src/app/layout.tsx`, swap the Google Fonts import.

---

## 📱 Pages Summary
| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, selected projects, skills preview |
| `/projects` | `app/projects/page.tsx` | Full project grid with filter tabs |
| `/experience` | `app/experience/page.tsx` | About, skills bento, education |
| `/contact` | `app/contact/page.tsx` | Contact form + social links |
