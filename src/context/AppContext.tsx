import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";
type Theme = "light" | "dark";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("portfolio-language") as Language) || "pt";
  });
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("portfolio-theme") as Theme) || "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
