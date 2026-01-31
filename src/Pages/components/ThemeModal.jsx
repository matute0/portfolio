import {useEffect ,useState } from "react";
import ThemeSelector from "./ThemeSelector";
import styles from "./ThemeModal.module.css"

export default function ThemeModal({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button className={styles.buttonModal} onClick={() => setOpen(true)}>
        {mode === "light" ? (
    <img src="sun-outline.svg" className={styles.eyeModal} />
) : mode === "dark" ? (
    <img src="moon-outline.svg" className={styles.eyeModal} />
) : (
    <img src="eye-outline.svg" className={styles.eyeModal} />
)}
      </button>

      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <ThemeSelector mode={mode} setMode={setMode} />
          </div>
        </div>
      )}
    </>
  );
}