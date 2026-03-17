import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ThemeModal from "../components/themes/ThemeModal.jsx";
import { motion } from "framer-motion";
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
import LanguageSelector from "../components/language/LanguageSelector.jsx";
import SettingsButton from "../components/settings/SettingsButton.jsx";
import ExplorerBar from "../components/explorer-bar/ExplorerBar.jsx";
import AboutMe from "../aboutme/AboutMe.jsx"
import Default from "../default/Default.jsx";
import DownloadCV from "../components/download/DownloadCV.jsx";
import WorkCard from "../components/work-card/WorkCard.jsx";

export default function Home() {
  const { lang} = useLanguage();
  const t = translations[lang];
  const [section, setSection] = useState("home");

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
    <SettingsButton mode={mode} setMode={setMode}/>
      <div className={styles.div}>
        <motion.div className={styles.card}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ y: -5 }}>
        <img className={styles.profile} src="1769803415003-profile.webp" />
        <h2 className={styles.name}>{t.name}</h2>
        <h2 className={styles.fullstack}>{t.role}</h2>
          <div className={styles.contacts}>
            <button className={styles.contact}><a target="_blank" href="https://www.linkedin.com/in/matias-fernandez-escuder-86b5a136a/"><img src="145807.png"/></a></button>
            <button className={styles.contact}><a target="_blank" href="https://github.com/matute0"><img className={styles.github} src="github.svg" /></a></button>
          </div>
        </motion.div>
        <div className={styles.work}>
          <WorkCard/>
        </div>
        <div className={styles.download}>
          <DownloadCV/>
        </div>
        
      </div>
      <div className={styles.div2}>
          {section == "aboutme" && <>
        <AboutMe/>
        </>}
        {section == "home" && <>
        <Default/>
        </>}
        </div>
      
      <div className={styles.explorer}>
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
        <ExplorerBar section={section} setSection={setSection} />
        
      </motion.div>
      </div>
      
      
    </>
  );
}