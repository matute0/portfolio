import styles from "../duolingo/Duolingoinfo.module.css";
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
export default function Duolingoinfo(){
    const { lang } = useLanguage();
    const t = translations[lang];
    return(
        <>
        <div className={styles.card}>
            <h1>{t.certificate}</h1>
            <div className={styles.content}>
                <p>{t.obtdate}: {t.duolingodate}</p>
                <div className={styles.individual}>
                    <div className={styles.score}>
                        <p>Speaking</p>
                        <h1>80</h1>
                    </div>
                    <div className={styles.score}>
                        <p>Writing</p>
                        <h1>65</h1>
                    </div>
                    <div className={styles.score}>
                        <p>Reading</p>
                        <h1>70</h1>
                    </div>
                    <div className={styles.score}>
                        <p>Listening</p>
                        <h1>55</h1>
                    </div>
                </div>
                <div className={styles.individual}>
                    <div className={styles.score}>
                        <p>Production</p>
                        <h1>75</h1>
                    </div>
                    <div className={styles.score}>
                        <p>Literacy</p>
                        <h1>70</h1>
                    </div>
                    <div className={styles.score}>
                        <p>Comprehension</p>
                        <h1>65</h1>
                    </div>
                    <div className={styles.score}>
                        <p>Conversation</p>
                        <h1>70</h1>
                    </div>
                </div>
                <p>{t.certificateid}: bql06rpndt9dtkq7</p>
                <a target="_blank" 
  rel="noopener noreferrer" href="https://certs.duolingo.com/bql06rpndt9dtkq7">{t.certificatevalidate} ↗</a>
                <a href="english_certificate.pdf" className={styles.a} download="english_certificate.pdf">
                    <div className={styles.download}>{t.downloadcertificate}
                    <img src="download-rounded.svg"></img>
                </div>
                </a>
                
            </div>
        </div>
        </>
    );
}