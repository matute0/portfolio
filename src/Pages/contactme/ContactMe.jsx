import styles from "../contactme/ContactMe.module.css";
import { motion } from "framer-motion";
import { translations } from "@/i18n/translations.js";
import { useLanguage } from "@/context/LanguageContext.jsx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
    const { lang } = useLanguage();
    const t = translations[lang];
    
    const form = useRef();
    
  
    const [errors, setErrors] = useState({}); 
    const [status, setStatus] = useState(null); 
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const sendEmail = (e) => {
        e.preventDefault();


        const formData = new FormData(form.current);
        const name = formData.get("user_name");
        const email = formData.get("user_email");
        const message = formData.get("message");

        let newErrors = {};
        if (!name.trim()) newErrors.name = true;
        if (!email.trim()) newErrors.email = true;
        if (!message.trim()) newErrors.message = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; 
        }

        
        setErrors({});
        setIsSubmitting(true);
        setStatus(null); 

        
        emailjs.sendForm("service_pzev7ye", "template_1jq4s7j", form.current, "1gwKL0HFvH1IjNBFE")
        .then(() => {
            setStatus("success"); 
            form.current.reset(); 
        })
        .catch((error) => {
            setStatus("error");
            console.error("Error al enviar:", error);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    }

    return (
        <>
            <motion.div className={styles.card}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}>
                
                <br/>
                <br/>

                <div className={styles.form}>
                    <form ref={form} onSubmit={sendEmail} noValidate>
                        <h2>{t.sendme}</h2>
                        
                        <div className={styles.inputgroup}>
                            <input 
                                type="text" 
                                name="user_name" 
                                placeholder={t.yourname} 
                                className={errors.name ? styles.inputerr : ""} 
                            />
                            {errors.name && <span className={styles.error}>{t.required}</span>}
                        </div>

                        <div className={styles.inputgroup}>
                            <input 
                                type="email" 
                                name="user_email" 
                                placeholder={t.youremail} 
                                className={errors.email ? styles.inputerr : ""} 
                            />
                            {errors.email && <span className={styles.error}>{t.required}</span>}
                        </div>

                        <div className={styles.inputgroup}>
                            <textarea 
                                name="message" 
                                placeholder={t.message} 
                                className={errors.message ? styles.inputerr : ""}
                            ></textarea>
                            {errors.message && <span className={styles.error}>{t.required}</span>}
                        </div>

                        {status === "success" && (
                            <div className={`${styles.statusmsg} ${styles.success}`}>{t.success}</div>
                        )}
                        {status === "error" && (
                            <div className={`${styles.statusmsg} ${styles.errormsg}`}>{t.error}</div>
                        )}

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? `${t.sending}` : t.send}
                        </button>
                    </form>

                    <div className={styles.right}>
                        <h1 className={styles.text}>{t.contacttext}</h1>
                    </div>
                </div>
            </motion.div>
        </>
    );
}