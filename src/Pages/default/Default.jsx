import styles from "../default/Default.module.css"
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1, 
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Default() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const lines = Array.isArray(t.welcome) ? t.welcome : [t.welcome];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h1 
          className={styles.h1}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {lines.map((line, index) => (
            <motion.span 
              key={index}
              variants={lineVariants}
              style={{ display: "block" }}
              className={index === 2 ? styles.highlightText : ""}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </>
  );
}