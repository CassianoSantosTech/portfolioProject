'use client';
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

const translations = {
    en: {
        welcome: "Welcome",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        changeLanguage: "Change to Portuguese",
        phoneFrame: "Phone Frame",
        laptopFrame: "Laptop Frame",
        welcomeDescription: "A Full Stack Developer passionate about creating clean and efficient code.",
        aboutDescription: "My journey in technology is marked by important milestones: I graduated in Systems Analysis and Development from FIAP, started with courses like Harvard's CS50, earned certifications in SQL and Full Stack and developed some of my own projects. Each step, from the first 'Hello World' to delivering complete solutions, reinforced my passion for learning and innovating. Today, I continue to evolve, always seeking new challenges and collaborating in teams that value growth and creativity. In my free time, I focus on staying healthy by playing basketball and surfing. These activities help me stay energized and balanced in both my personal and professional life.",
        languages: "Languages",
        portugueseLanguage: "🇧🇷 PT-BR Native Speaker",
        englishLanguage: "🇺🇸 EN",
        educational: "Educational",
        educationalDescription: "🎓 Graduated in Systems Analysis and Development at FIAP",
        sqlCertification: "🏅 SQL Certification by Alura",
        fullStackCertification: "🏅 Full Stack Certification by Infinity School | Partners: Microsoft Partner, Google Partner",
        cs50Certification: "🏅 CS50's Introduction to Computer Science by Harvard University",
        skillsAndTools: "Skills and Tools",
        myProjects: "My Projects",
        personalPage: "Personal page",
        showLess: "Show less",
        showMore: "Show more",
        comingSoon: "Coming Soon",
        contacts: "Contacts"
    },
    pt: {
        welcome: "Bem-vindo",
        about: "Sobre mim",
        projects: "Projetos",
        contact: "Contato",
        changeLanguage: "Mudar para Inglês",
        phoneFrame: "Formato celular",
        laptopFrame: "Formato notebook",
        welcomeDescription: "Um Desenvolvedor Full Stack apaixonado por criar código limpo e eficiente.",
        aboutDescription: "Minha trajetória na tecnologia é marcada por marcos importantes: sou graduado em Análise e Desenvolvimento de Sistemas pela FIAP, comecei com cursos como o CS50 de Harvard, conquistei certificações em SQL e Full Stack e desenvolvi alguns projetos próprios. Cada etapa, desde o primeiro 'Hello World' até a entrega de soluções completas, reforçou minha paixão por aprender e inovar. Hoje, sigo evoluindo, buscando sempre novos desafios e colaborando em equipes que valorizam crescimento e criatividade. No meu tempo livre, foco em manter um estilo de vida saudável jogando basquete e surfando. Essas atividades me ajudam a manter a energia e o equilíbrio tanto na vida pessoal quanto profissional.",
        languages: "Idiomas",
        portugueseLanguage: "🇧🇷 PT-BR idioma nativo",
        englishLanguage: "🇺🇸 EN - Inglês",
        educational: "Formação acadêmica",
        educationalDescription: "🎓 Graduado em Analise e Desenvolvimento de Sistemas pela FIAP",
        sqlCertification: "🏅 Certificação SQL pela Alura",
        fullStackCertification: "🏅 Certificação Full Stack pela Infinity School | Parceiros: Microsoft Partner, Google Partner",
        cs50Certification: "🏅 CS50's Introdução à Ciência da Computação pela Universidade de Harvard",
        skillsAndTools: "Habilidades e tecnologias",
        myProjects: "Meus Projetos",
        personalPage: "Página pessoal",
        showLess: "Mostrar menos",
        showMore: "Mostrar mais",
        comingSoon: "Em breve",
        contacts: "Contatos"
    }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations['en'];

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    translations: typeof translations;
};

const LanguageContext = createContext<LanguageContextType>({
    language: "pt",
    toggleLanguage: () => {},
    translations,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("pt");

    useEffect(() => {
        const stored = localStorage.getItem("lang") as Language | null;
        if (stored && stored !== language && stored in translations) {
            setLanguage(stored);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleLanguage = () => {
        const next: Language = language === "pt" ? "en" : "pt";
        setLanguage(next);
        localStorage.setItem("lang", next);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextType {
    return useContext(LanguageContext);
}
