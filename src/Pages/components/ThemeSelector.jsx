import { useEffect, useState } from "react";

export default function ThemeSelector() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme-mode") || "system";
  });

  useEffect(() => {
    const applyTheme = (mode) => {
      if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else if (mode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute(
          "data-theme",
          systemDark ? "dark" : "light"
        );
      }
    };

    applyTheme(mode);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);
  useEffect(() => {
  if (mode !== "system") return;

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => {
    document.documentElement.setAttribute(
      "data-theme",
      media.matches ? "dark" : "light"
    );
  };

  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
}, [mode]);

  return (
    <select value={mode} onChange={(e) => setMode(e.target.value)}>
      <option value="system">Predeterminado del navegador</option>
      <option value="light">Modo claro</option>
      <option value="dark">Modo oscuro</option>
    </select>
  );
}