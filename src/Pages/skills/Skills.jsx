import styles from '../skills/Skills.module.css'
import { useLanguage } from "@/context/LanguageContext.jsx";
import { translations } from "@/i18n/translations.js";
import { motion } from "framer-motion";

export default function Skills(){
      const { lang} = useLanguage();
    const t = translations[lang];
    return(
    <>
    <motion.div className={styles.container}
    initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}>

     <motion.div className={styles.lang}
     transition={{ duration: 0.2 }}
        whileHover={{ y: -5 }}>
        <h2>{t.langframew}</h2>
        <div className={styles.content}>
        <div className={styles.skill}>
        <img src="java-fill.svg"/>
        <p>Java</p>
        </div>
        <div className={styles.skill}>
            <img src="springboot.svg"/>
            <p>Spring Boot</p>
        </div>
        <div className={styles.skill}>
            <img src="react-fill.svg"/>
            <p>React</p>
        </div>
        
        <div className={styles.skill}>
            <img src="javascript-fill.svg"/>
            <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
            <img src="typescript-fill.svg"/>
            <p>TypeScript</p>
        </div>
        
        <div className={styles.skill}>
            <img src="html-solid.svg"/>
            <p>HTML 5</p>
        </div>
        <div className={styles.skill}>
            <img src="css-sharp.svg"/>
            <p>CSS</p>
        </div>
        <div className={styles.skill}>
            <img src="python-fill.svg"/>
            <p>Python</p>
        </div>
        </div>
        
     </motion.div>

    <motion.div className={styles.testing}
    transition={{ duration: 0.2 }}
        whileHover={{ y: -5 }}>
        <h2>{t.softwaretesting}</h2>
        <div className={styles.content}>
            <div className={styles.skill}>
                <img src="junit.svg"/>
                <p>JUnit</p>
            </div>
            <div className={styles.skill}>
            <img className={styles.testlink} src="testlink-logo.png"/>
            <p>TestLink</p>
        </div>
        <div className={styles.skill}>
            <img src="postman.svg"/>
            <p>Postman</p>
        </div>
        </div>
        
    </motion.div>

    <motion.div className={styles.bd}
    transition={{ duration: 0.2 }}
        whileHover={{ y: -5 }}>
        <h2>{t.bd}</h2>
        <div className={styles.content}>
            <div className={styles.skill}>
                <img src="postgresql-fill.svg"/>
                <p>PostgresSQL</p>
            </div>
            <div className={styles.skill}>
                <img src="mongodb.svg"/>
                <p>MongoDB</p>
            </div>
            <div className={styles.skill}>
                <img src="sql.svg"/>
                <p>SQL</p>
            </div>
            <div className={styles.skill}>
                <img src="hibernate.svg"/>
                <p>Hibernate</p>
            </div>
        </div>
    </motion.div>

    <motion.div className={styles.deploy}
    transition={{ duration: 0.2 }}
        whileHover={{ y: -5 }}>
        <h2>{t.deploy}</h2>
        <div className={styles.content}>
            <div className={styles.skill}>
                <img src="docker.svg"/>
                <p>Docker</p>
            </div>
            <div className={styles.skill}>
                <img src="cisco.svg"/>
                <p>Packet Tracer</p>
            </div>
            <div className={styles.skill}>
                <img src="gns3.svg"/>
                <p>GNS3</p>
            </div>
            <div className={styles.skill}>
                <img src="git-solid.svg"/>
                <p>Git</p>
            </div>
            <div className={styles.skill}>
                <img src="github.svg"/>
                <p>Github</p>
            </div>
            <div className={styles.skill}>
                <img src="jira.svg"/>
                <p>Jira</p>
            </div>
            <div className={styles.skill}>
                <img src="maven.svg"/>
                <p>Maven</p>
            </div>
        </div>
    </motion.div>

    </motion.div>
    
    </>
    );
    
}