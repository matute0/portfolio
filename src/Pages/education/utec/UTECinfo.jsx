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
            <p>{t.startdate}</p>
            <p>{t.intermediate}</p>
            <p>{t.graduationexp}</p>
            <h1 className={styles.com}>{t.keycom}</h1>
            <div className={styles.habilities}>
                <p>{t.softwaredev}</p>
                <p>{t.softwaretest}</p>
                <p>{t.databaseman}</p>
                <p>{t.systemarch}</p>
                <p>{t.agilemeth}</p>
                <p>{t.userexp}</p>
            </div>
            <br />
            <br />
            <a href="https://utec.edu.uy/es/educacion/carrera/licenciatura-en-tecnologias-de-la-informacion/" target="_blank" rel="noopener noreferrer">{t.visitutec}</a>
            <a href="studyplan.pdf" className={styles.a} download="studyplan.pdf">
                    <div className={styles.download}>{t.downloadprogram}
                    <img src="download-rounded.svg"></img>
                </div>
                </a>
        </div>
        </>
    );
}