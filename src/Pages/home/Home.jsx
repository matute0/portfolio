import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ThemeModal from "../components/ThemeModal.jsx";

export default function Home() {
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

    handler()
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [mode]);


  return (
    <>
      <ThemeModal mode={mode} setMode={setMode} />
      <div className={styles.div}>
        <img className={styles.profile} src="1769803415003-profile.jpg" />
        <h2 className={styles.fullstack}>Full Stack Developer</h2>
      </div>

    </>
  );
}