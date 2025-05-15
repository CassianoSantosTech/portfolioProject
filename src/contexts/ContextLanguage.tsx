import { createContext, useContext, useState } from "react";


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
        aboutDescription: "I am constantly learning and staying updated with new technologies. I believe in always improving and enjoy working in teams that collaborate and innovate. In my free time, I focus on staying healthy by playing basketball and surfing. These activities help me stay energized and balanced in both my personal and professional life. ",
        languages: "Languages",
        portugueseLanguage: "🇧🇷 PT-BR Native Speaker",
        englishLanguage: "🇺🇸 EN",
        educational: "Educational",
        educationalDescription: "🎓 Graduated in Systems Analysis and Development at FIAP",
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
        aboutDescription: "Estou constantemente aprendendo e me mantendo atualizado com novas tecnologias. Acredito na melhoria contínua e gosto de trabalhar em equipes que colaboram e inovam. No meu tempo livre, foco em manter um estilo de vida saudável jogando basquete e surfando. Essas atividades me ajudam a manter a energia e o equilíbrio tanto na vida pessoal quanto profissional.",
        languages: "Idiomas",
        portugueseLanguage: "🇧🇷 PT-BR idioma nativo",
        englishLanguage: "🇺🇸 EN - Inglês",
        educational: "Formação acadêmica",
        educationalDescription: "🎓 Graduado em Analise e Desenvolvimento de Sistemas pela FIAP",
        skillsAndTools: "Habilidades e tecnologias",
        myProjects: "Meus Projetos",
        personalPage: "Página pessoal",
        showLess: "Mostrar menos",
        showMore: "Mostrar mais",
        comingSoon: "Em breve",
        contacts: "Contatos"
    }
};

const LanguageContext = createContext<any>({
    language: "pt",
    toggleLanguage: () => { },
    translations: translations,
});

export const LanguageProvider = ({ children }: any) => {

    const [language, setLanguage] = useState<any>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("lang") || "pt";
        }
        return "pt";
    });
    const toggleLanguage = () => {
        const newLang = language === "pt" ? "en" : "pt";
        setLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );

}

export const useLanguage = () => useContext(LanguageContext);
