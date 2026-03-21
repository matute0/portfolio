import { useState } from "react";
import styles from "../education/Education.module.css";
import { translations } from "@/i18n/translations.js";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext.jsx";
import UTECinfo from "./utec/UTECinfo";

export default function Education() {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [isUtecOpen, setIsUtecOpen] = useState(false);
  const [isDuolingoOpen, setDuolingoOpen] = useState(false);

  const toggleUtecInfo = () => {
    setIsUtecOpen(!isUtecOpen);
  };
  const toggleDuolingoInfo = () =>{
    setDuolingoOpen(!isDuolingoOpen);
  }

  return (
    <div className={styles.education}>
      <motion.div
        className={styles.cards}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.uteccard}>
        <div 
          className={styles.utec} 
          onClick={toggleUtecInfo} 
          style={{ cursor: "pointer" }}
        >
          <div className={styles.top}>
            <img src="09-Isotipo-1.png" alt="UTEC" />
            <h1>UTEC</h1>
          </div>
          <div className={styles.bottom}>
            <h1>{t.utecbottom}</h1>
            <h1 className={styles.inprogress}>
              {t.inprogress}
              <span className={styles.dots}></span>
            </h1>
          </div>
        </div>
        <AnimatePresence>
          {isUtecOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className={styles.shadow}
            >
              <UTECinfo />
            </motion.div>
          )}
        </AnimatePresence>
        
        </div>
        
        <div className={styles.duolingocard}>
          <div className={styles.duolingo}
        onClick={toggleDuolingoInfo}>
          <div className={styles.top}>
            <h1>Duolingo English Test</h1>
          </div>
          <div className={styles.bottom}>
            <h1>CEFR B1</h1>
          </div>
          
        </div>
        <AnimatePresence>
          {isDuolingoOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className={styles.shadow}
            >
              <UTECinfo />
            </motion.div>
          )}
        </AnimatePresence>

        </div>
        
      </motion.div>

    </div>
  );
}