import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./SettingsButton.module.css"
import SettingsModal from "./SettingsModal";

export default function SettingsButton({mode, setMode}){
    const [open, setOpen] = useState(false);
    return(
        <>
        <SettingsModal mode={mode} setMode={setMode} open={open} setOpen={setOpen}/>
        <motion.button
        className={styles.button}
        onClick={() => setOpen(true)}
  whileHover={{ rotate: 20 }}
  transition={{ type: "spring", stiffness: 300 }}>
    <img src="settings-outline.svg"/>
        </motion.button>
        </>
    );
}