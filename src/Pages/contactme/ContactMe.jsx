import styles from "../contactme/ContactMe.module.css"
import { motion } from "framer-motion";
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_pzev7ye", "template_1jq4s7j",form.current, "1gwKL0HFvH1IjNBFE")
        .then(() => {
            alert("Mensaje enviado");
        })
    }
          const { lang} = useLanguage();
      const t = translations[lang];
    return(
        <>
        <motion.div className={styles.card}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
            <h1>{t.contactme}</h1>
            <div className={styles.form}>
                <form ref={form} onSubmit={sendEmail}>
                    <h2>{t.sendme}</h2>
                    <input type="text" name="user_name" placeholder={t.yourname} required></input>
                    <input type="email" name="user_email" placeholder={t.youremail} required></input>
                    <textarea name="message" placeholder={t.message} required></textarea>
                    <button type="submit">{t.send}</button>
                </form>
                <div className={styles.right}>
                <h1 className={styles.text}>{t.contacttext}</h1>
                </div>
            </div>
        </motion.div>
        </>
    );
}