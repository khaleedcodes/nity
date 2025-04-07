```markdown
# 🧠 Nity – Minimal Task Manager App

Nity is a clean and simple task management app built using **React**, **TypeScript**, and **Vite**. It allows users to add tasks, store them in local storage, and mark them as completed — all while maintaining clarity and usability.

---

## ⚙️ Tech Stack

- ⚛️ React (with TypeScript)
- ⚡ Vite for fast dev experience and hot module reload
- 💅 CSS for styling
- 💾 Local Storage for data persistence

---

## ✨ Features

- 📝 Create tasks with a simple UI
- 💾 Store tasks persistently in browser local storage
- ✅ Mark tasks as completed (without deleting)
- ♻️ Reactively updates UI based on task state

---

## 🔧 Dev Setup

To run the app locally:

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

---

## 📁 Project Structure

```
nity/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Linting & Tooling

This project includes a minimal ESLint setup, and can be extended for production-ready apps.

### Expanding ESLint Configuration (Optional)
You can enable strict type-aware rules using:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

---

## 🎓 For Course Use

This project is part of a DevOps implementation assignment for a COMP course at Centennial College. It integrates:

- ✅ Agile tracking with Azure DevOps Boards
- 🔁 Source control via GitHub
- 🚀 CI/CD pipeline using Jenkins or Azure DevOps Pipelines

---

## 👥 Contributors

- Khaleed  
- Dikshya

---

> Built with clarity in mind — *Nity* is where neat meets productivity.
```
