# Kavita Chimman — Portfolio

A professional portfolio website built with **React + Vite + Tailwind CSS**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
kavita-portfolio/
├── public/
│   ├── kavita.png              ← Your photo
│   └── Kavita_Chimman_Resume.pdf
├── src/
│   ├── data/
│   │   ├── projects.json       ← Edit your projects here
│   │   ├── education.json      ← Edit your education here
│   │   ├── achievements.json   ← Edit achievements & certificates here
│   │   └── skills.json         ← Edit your skills here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## ✏️ How to Update Content

All content is stored in **JSON files** inside `src/data/`:

- **`projects.json`** — Add/edit projects (title, description, tech stack, links)
- **`education.json`** — Add/edit education (degree, institution, university, score)
- **`achievements.json`** — Add/edit awards & certificates (add `certificateUrl` for cert links)
- **`skills.json`** — Add/edit skill categories and items

## 🌐 Deploy to GitHub Pages (Free)

1. Run `npm run build`
2. Push the `dist/` folder to a repo named `yourusername.github.io`
3. Enable GitHub Pages in Settings → Pages

## 🔗 Replace Social Links

Search for `kavitachimman` in the components and replace with your actual usernames.
