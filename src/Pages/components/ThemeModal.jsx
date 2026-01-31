import {useEffect ,useState } from "react";
import ThemeSelector from "./ThemeSelector";
import styles from "./ThemeModal.module.css";
import { motion } from "framer-motion";


export default function ThemeModal({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <motion.button className={styles.buttonModal} onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.01 }}>
        {mode === "light" ? (
    <img src="sun-outline.svg" className={styles.eyeModal} />
) : mode === "dark" ? (
    <img src="moon-outline.svg" className={styles.eyeModal} />
) : (
    <img src="eye-outline.svg" className={styles.eyeModal} />
)}
      </motion.button>

      {open && (
        <motion.div className={styles.modalOverlay} onClick={() => setOpen(false)}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 0.2 }}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <ThemeSelector mode={mode} setMode={setMode} />
          </div>
        </motion.div>
      )}
    </>
  );
}