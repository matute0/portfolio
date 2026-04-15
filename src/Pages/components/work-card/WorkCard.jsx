import styles from "../work-card/WorkCard.module.css";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";

export default function WorkCard(){
    const { lang} = useLanguage();
    const t = translations[lang];
    return(
        <>
        <div className={styles.card}>
            <div className={styles.circle}>

            </div>
            <h3>
                {t.work}
            </h3>
        </div>
        </>
    );
}