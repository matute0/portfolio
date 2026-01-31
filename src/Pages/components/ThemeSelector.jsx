import { useEffect, useState } from "react";
import styles from "./ThemeSelector.module.css"

export default function ThemeSelector() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme-mode") || "system";
  });

  useEffect(() => {
    const applyTheme = (mode) => {
      if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else if (mode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute(
          "data-theme",
          systemDark ? "dark" : "light"
        );
      }
    };

    applyTheme(mode);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);
  useEffect(() => {
  if (mode !== "system") return;

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => {
    document.documentElement.setAttribute(
      "data-theme",
      media.matches ? "dark" : "light"
    );
  };

  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}, [mode]);

 return (
    <div className={styles.theme_switch}>
      <button
        className={mode === "light" ? "active" : ""}
        onClick={() => setMode("light")}
        aria-label="Modo claro"
      >
        <img src="sun-outline.svg" className={styles.modesIcon}/>

      </button>
      <button
        className={mode === "system" ? "active" : ""}
        onClick={() => setMode("system")}
        aria-label="Modo sistema"
      >
        <img src="monitor-outline.svg" className={styles.modesIcon}/>
        
      </button>

      <button
        className={mode === "dark" ? "active" : ""}
        onClick={() => setMode("dark")}
        aria-label="Modo oscuro"
      >
      <img src="moon-outline.svg" className={styles.modesIcon}/>

      </button>
    </div>
  );
}