import styles from "./SettingsModal.module.css"
import { motion } from "framer-motion";
import {useEffect , useState } from "react";
import LanguageSelector from "../language/LanguageSelector.jsx";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import ThemeSelector from "../themes/ThemeSelector.jsx";


export default function SettingsModal({mode, setMode, open, setOpen}){
      const { lang} = useLanguage();
        const t = translations[lang];
    useEffect(() => {
        const handler = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
      }, []);
    
    return(
        <>
        {open && (
            <>
            <motion.div
        className={styles.overlay}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 0.2 }}>
            <div className={styles.div}>
                <button className={styles.crossButton} onClick={() => setOpen(false)}>
                    <img className={styles.cross} src="cross-filled.svg"/>
                </button>
                <h2 className={styles.h2}>{t.settings}</h2>
                <div className={styles.options}>
                    <div><LanguageSelector/></div>
                    <div><ThemeSelector mode={mode} setMode={setMode}/></div>
                </div>
                
            </div>
            
        </motion.div>
        </>
        )}
        
        </>
    );
}