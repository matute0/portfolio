import styles from "./ThemeSelector.module.css"

export default function ThemeSelector({ mode, setMode }) {
  return (
    <div className={styles.theme_switch}>
      <button
        className={mode === "light" ? styles.active : ""}
        onClick={() => setMode("light")}
        aria-label="Modo claro"
      >
        <img src="sun-outline.svg" className={styles.modesIcon} />
      </button>
      <button
        className={mode === "system" ? styles.active : ""}
        onClick={() => setMode("system")}
        aria-label="Modo sistema"
      >
        <img src="monitor-outline.svg" className={styles.modesIcon} />
      </button>
      <button
        className={mode === "dark" ? styles.active : ""}
        onClick={() => setMode("dark")}
        aria-label="Modo oscuro"
      >
        <img src="moon-outline.svg" className={styles.modesIcon} />
      </button>
    </div>
  );
}