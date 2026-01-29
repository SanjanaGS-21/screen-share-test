<<<<<<< HEAD
# screen-share-test
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> 6e499d3 (Screen Share test App)
# 🖥️ Screen Share Test App

A modern frontend application that tests browser screen-sharing capabilities using native Web APIs.  
Built as part of a **Frontend Shortlisting Task**.

---

## 🚀 Live Links

🌍 **Live App:** https://screen-share-test-indol.vercel.app/ 
📂 **GitHub Repo:** https://github.com/SanjanaGS-21/screen-share-test

---

## 📌 Project Objective

This project demonstrates:

- Browser screen-sharing permission handling
- Media stream lifecycle management
- Real-time screen preview
- Proper cleanup of media tracks
- Handling of user cancellation & permission errors
- Clean React state management

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React + Vite | Frontend framework |
| TypeScript | Type safety |
| Tailwind CSS | Modern UI styling |
| Web APIs | Screen capture functionality |

---

## ✨ Features

### ✅ Browser Capability Check
Checks if `getDisplayMedia` is supported before allowing testing.

### 🎥 Live Screen Sharing
- Requests screen sharing permission
- Shows real-time preview
- Displays resolution and display type

### 🔄 Lifecycle Handling
- Detects when user stops sharing
- Releases media tracks
- Prevents memory leaks

### ❌ Error Handling
Handles:
- Permission denied
- User cancelled picker
- Unsupported browser
- Unknown errors

### ♻ Retry Flow
Allows restarting screen share without reusing old streams.

---

## 📸 Screenshots

### 🏠 Home Page
<img width="1899" height="875" alt="Screenshot 2026-01-29 125017" src="https://github.com/user-attachments/assets/2d7ba287-423b-4800-a078-9e10caf76ab0" />


### 🎥 Screen Sharing Test
<img width="1879" height="638" alt="Screenshot 2026-01-29 125026" src="https://github.com/user-attachments/assets/1f162364-c90a-4def-9cc0-2e8f65729bf5" />


### 📊 Live Preview & Resolution Info
<img width="1200" height="879" alt="Screenshot 2026-01-29 125036" src="https://github.com/user-attachments/assets/eaebffde-d9a3-4f46-9464-4299e9360b11" />


---

## 📂 Project Structure
src/
├── components/
│ └── Button.tsx
├── hooks/
│ └── useScreenShare.ts
├── pages/
│ ├── Home.tsx
│ └── ScreenTest.tsx
├── App.tsx
└── main.tsx

---

## ⚙️ Setup Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev
http://localhost:5173

git push
# Import GitHub repo into Vercel and deploy

