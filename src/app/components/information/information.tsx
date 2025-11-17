
import { useLanguage } from "@/contexts/ContextLanguage";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./information.css";

export function Information() {
    const { language, translations } = useLanguage();

    return (
        <div className="infos">
            {/* <SectionTitle text={translations[language].languages} /> */}
            <div className="languages-info">
                <span>{translations[language].portugueseLanguage}</span>
                <span>{translations[language].englishLanguage}</span>
            </div>

            {/* <SectionTitle text={translations[language].educational} /> */}
            <div className="educational-info">
                <span>{translations[language].educationalDescription}</span>
            </div>

        </div>
    );
}
