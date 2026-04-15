import {createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({children}) {
    const [lang, setLang] = useState(() => {
        const browserLang = navigator.language.startsWith("es") ? "es" : "en";
        return localStorage.getItem("lang") || browserLang;
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    },[lang]);

    return(
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(){
    return useContext(LanguageContext)
}