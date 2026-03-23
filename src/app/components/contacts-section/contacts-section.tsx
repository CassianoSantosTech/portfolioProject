'use client';
import { useLanguage } from '@/contexts/ContextLanguage';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { SocialBtns } from '../social-btns/social-btns';
import './contacts-section.css';

export default function ContactsSection() {
    const { language, translations } = useLanguage();
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    const visible = isVisible ? 'is-visible' : '';

    return (
        <section id="contacts" ref={ref} className="contacts-section">
            <h2 className={`animate-fade-up ${visible}`}>
                {translations[language].contacts}
            </h2>
            <div
                className={`animate-scale ${visible}`}
                style={{ '--anim-delay': '0.2s' } as React.CSSProperties}
            >
                <SocialBtns />
            </div>
        </section>
    );
}
