import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
import styles from "../aboutme/AboutMe.module.css";
import { motion } from "framer-motion";

export default function AboutMe(){
      const { lang} = useLanguage();
      const t = translations[lang];
    return(
        <>
        <motion.div className={styles.aboutdiv}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
            <h1>{t.aboutme}</h1>
            <p>{t.metext}</p>
        </motion.div>
        </>
    )
}