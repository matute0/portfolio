import styles from "./Projects.module.css";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import { motion } from "framer-motion";

export default function Projects(){
    const { lang} = useLanguage();
    const t = translations[lang];
    return(
        <>
        <motion.div className={styles.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
            <h1>{t.comingsoon}</h1>
        </motion.div>
        </>
    );
}