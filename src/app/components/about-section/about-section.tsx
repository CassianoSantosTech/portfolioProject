import { useLanguage } from '@/contexts/ContextLanguage';
import ExperienceTimer from '../ExperienceTimer/ExperienceTimer';
import { Information } from '../information/information';
import ProgrammingLanguages from '../programming-languages-section/programming-languages';
import './about-section.css';
export default function AboutSection() {
    const { language, translations } = useLanguage();

    return (
        <section id="about" className="about-section">
            <h2>{translations[language].about}</h2>
            <p>{translations[language].aboutDescription}</p>
            <Information />
            {language === 'pt' ? (
                <ExperienceTimer
                    startDate="2023-07-01"
                    className="timer"
                    textPrefix="Atuando profissionalmente há"
                    textYear="ano"
                    textAnd="e"
                    textDay="dia"
                    textSuffix="com tecnologia."
                />
            ) : (
                <ExperienceTimer
                    startDate="2023-07-01"
                    className="timer"
                    textPrefix="Working professionally for"
                    textYear="year"
                    textAnd="and"
                    textDay="day"
                    textSuffix="with technology."
                />
            )}
            <ProgrammingLanguages />
        </section>
    )
}