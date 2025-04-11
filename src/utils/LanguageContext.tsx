import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode}) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'Português';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);