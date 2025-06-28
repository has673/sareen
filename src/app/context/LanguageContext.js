"use client";
import { createContext, useContext, useState, useEffect } from "react";
import ar from "../locale/ar";
import en from "../locale/en";

const translations = { en, ar };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");

    if (storedLang && Object.keys(translations).includes(storedLang)) {
      setLanguage(storedLang);
    } else {
      setLanguage("en");
      localStorage.setItem("lang", "en");
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: translations[language], // 🔥 Easy to access translations like t.header.nav.home
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
