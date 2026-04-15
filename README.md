# 🚀 Personal Web Portfolio | Matías Fernández

<img width="1913" height="912" alt="image" src="https://github.com/user-attachments/assets/e2871dcc-c653-4154-adf6-82af8f22f489" />

An interactive and minimalist web portfolio designed to showcase my projects, skills, and experience as a Full Stack Developer. Built with a strong focus on user experience (UX), fluid animations, and a premium design.

[**View Live Portfolio**](https://tu-dominio.com)

## ✨ Key Features

- 🌗 **Dark / Light Mode:** Immersive experience with particle backgrounds that adapt to the system theme, ensuring optimal contrast and readability.
- 🌐 **Multi-language Support (i18n):** Custom implementation using Context API to seamlessly switch between English and Spanish without reloading the page.
- ✨ **Premium Animations:** Page transitions, stagger text effects, and fluid movements powered by Framer Motion.
- 📧 **Direct Contact:** Integrated contact form with a modern design featuring translucent inputs for a native dark mode experience.

---

## 🛠️ Technologies & Tools

- **Frontend:** React.js, HTML5, CSS (CSS Modules)
- **Animations:** Framer Motion
- **Global State:** React Context API (for language and theme management)
- **Deployment:** [Vercel]

## 📂 Project Structure

A quick overview of the main project architecture:

```text
src/
├── context/        # Global state management (e.g., LanguageContext)
├── i18n/           # Translation dictionaries (translations.js)
├── Pages/          # Main views and UI components
│   ├── components/ # Reusable UI elements (nav, particles, buttons)
│   ├── aboutme/    # "About Me" section
│   ├── contactme/  # Contact form
│   ├── default/    # Main animated text
│   ├── education/  # Education and background
│   ├── home/       # Main container wrapper
│   ├── projects/   # Projects gallery
│   └── skills/     # Tech stack and tools
├── App.jsx         # Root component and layout
└── main.jsx        # React entry point (Vite)
