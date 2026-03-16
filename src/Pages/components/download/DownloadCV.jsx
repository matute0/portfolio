import styles from "../download/DownloadCV.module.css"
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import { motion, scale } from "framer-motion";

export default function DownloadCV(){
      const { lang} = useLanguage();
    const t = translations[lang];
    return(
        <>
        <a className={styles.a} href="Matias_Fernandez_Junior_Software_Engineer.pdf" download="Matias_Fernandez_Junior_Software_Engineer.pdf">
            <motion.div className={styles.button}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{scale: 1.05}}>{t.download}
            <img src="download-rounded.svg"></img>
        </motion.div>
        </a>
        
        </>
    );
}