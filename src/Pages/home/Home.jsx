import styles from "./Home.module.css"

export default function Home(){

    return(
        <>
        <div className={styles.div}>
            <img className={styles.profile} src="1769803415003-profile.jpg"></img>
            <h2>Full Stack Developer</h2>
        </div>
        </>
    );
}