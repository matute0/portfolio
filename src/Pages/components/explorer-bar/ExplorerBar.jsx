import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import styles from "../explorer-bar/ExplorerBar.module.css"
export default function ExplorerBar(){
  const { lang} = useLanguage();
  const t = translations[lang];
    return( 
        <>
        <div className={styles.bar}>
            <a><p>{t.aboutme}</p></a>
            <a><p>{t.projects}</p></a>
            <a><p>{t.skills}</p></a>
            <a><p>{t.education}</p></a>
            <a><p>{t.contactme}</p></a>
        </div>
        </>
    );
}