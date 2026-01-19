import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
	setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	// Default to Korean as per original design, or detect browser language later
	const [language, setLanguageState] = useState<Language>("ko");

	const toggleLanguage = () => {
		setLanguageState((prev) => (prev === "ko" ? "en" : "ko"));
	};

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}

export type { Language };
