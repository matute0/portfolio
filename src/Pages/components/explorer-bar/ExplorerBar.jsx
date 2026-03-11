import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import styles from "../explorer-bar/ExplorerBar.module.css"

export default function ExplorerBar({section, setSection }){
  const { lang} = useLanguage();
  const t = translations[lang];
    return( 
        <>
        <div className={styles.bar}>
            <a className={section === "aboutme" ? styles.active : ""} onClick={()=> setSection("aboutme")}><p>{t.aboutme}</p></a>
            <a className={section === "projects" ? styles.active : ""} onClick={()=> setSection("projects")}><p>{t.projects}</p></a>
            <a className={section === "skills" ? styles.active : ""} onClick={()=> setSection("skills")}><p>{t.skills}</p></a>
            <a className={section === "education" ? styles.active : ""} onClick={()=> setSection("education")}><p>{t.education}</p></a>
            <a className={section === "contactme" ? styles.active : ""} onClick={()=> setSection("contactme")}><p>{t.contactme}</p></a>
        </div>
        </>
    );
}