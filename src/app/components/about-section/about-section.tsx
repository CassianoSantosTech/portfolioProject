'use client';
import { useLanguage } from '@/contexts/ContextLanguage';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import ExperienceTimer from '../ExperienceTimer/ExperienceTimer';
import { Information } from '../information/information';
import ProgrammingLanguages from '../programming-languages-section/programming-languages';
import './about-section.css';

export default function AboutSection() {
    const { language, translations } = useLanguage();
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    const visible = isVisible ? 'is-visible' : '';

    return (
        <section id="about" ref={ref} className="about-section">
            <h2 className={`animate-fade-up ${visible}`}>
                {translations[language].about}
            </h2>
            <p
                className={`animate-fade-up ${visible}`}
                style={{ '--anim-delay': '0.15s' } as React.CSSProperties}
            >
                {translations[language].aboutDescription}
            </p>
            <div
                className={`animate-fade-up ${visible}`}
                style={{ '--anim-delay': '0.3s' } as React.CSSProperties}
            >
                <Information />
            </div>
            <div
                className={`animate-fade-up ${visible}`}
                style={{ '--anim-delay': '0.4s' } as React.CSSProperties}
            >
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
            </div>
            <div
                className={`animate-fade-up ${visible}`}
                style={{ '--anim-delay': '0.5s' } as React.CSSProperties}
            >
                <ProgrammingLanguages />
            </div>
        </section>
    );
}
