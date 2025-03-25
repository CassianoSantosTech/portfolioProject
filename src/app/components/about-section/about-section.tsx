import { useLanguage } from '@/contexts/ContextLanguage';
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
            <ProgrammingLanguages />

        </section>
    )
}