import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import styles from "./LanguageSelector.module.css"

export default function LanguageSelector(){
    const { lang, setLang } = useLanguage();
    const t = translations[lang];
    return(
        <>
        <button className={styles.button} onClick={() => setLang(lang === "es" ? "en" : "es")}>
            <p>{t.langName}</p>
        </button>
        </>
    );
}