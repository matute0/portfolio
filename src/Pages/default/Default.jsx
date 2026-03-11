import styles from "../default/Default.module.css"
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { motion } from "framer-motion";
export default function Default(){
      const { lang} = useLanguage();
  const t = translations[lang];
    return(
        <>
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
        <h1 className={styles.h1}>{t.welcome}</h1>
        </motion.div>
        </>
    );
}