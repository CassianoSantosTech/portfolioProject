
import { useLanguage } from "@/contexts/ContextLanguage";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./information.css";

export function Information() {
    const { language, translations } = useLanguage();

    return (
        <div className="infos">
            <div className="languages-info">
                <span>{translations[language].portugueseLanguage}</span>
                <span>{translations[language].englishLanguage}</span>
            </div>
            <div className="educational-info">
                <span>{translations[language].educationalDescription}</span>
                <span>{translations[language].sqlCertification}</span>
                <span>{translations[language].fullStackCertification}</span>
                <span>{translations[language].cs50Certification}</span>
            </div>
        </div>
    );
}
