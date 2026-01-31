import styles from "./Home.module.css"
import ThemeSelector from "../components/ThemeSelector.jsx";

export default function Home(){

    return(
        <>
        <div className={styles.div}>
            <img className={styles.profile} src="1769803415003-profile.jpg"></img>
            <h2 className={styles.fullstack}>Full Stack Developer</h2>
        </div>
    <ThemeSelector />

        </>
    );
}