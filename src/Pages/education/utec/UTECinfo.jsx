import styles from "../utec/UTECinfo.module.css";
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
export default function UTECinfo(){
      const { lang } = useLanguage();
  const t = translations[lang];
    return(
        <>
        <div className={styles.card}>
            <h1>{t.universityeducation}</h1>

        </div>
        </>
    );
}