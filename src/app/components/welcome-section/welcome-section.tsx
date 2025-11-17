/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useLanguage } from '@/contexts/ContextLanguage';
import './welcome-section.css';

export default function WelcomeSection() {

    const { language, translations } = useLanguage();

    return (
        <section id="welcome" className="welcome-section">
            <div className="welcome-content">
                <div className='img-container'>
                    <img src="/me-in-vatican.jpeg" alt="Cassiano Photo" className="profile-photo" />
                </div>
                <h1>Cassiano Santos</h1>
                <p>{translations[language].welcomeDescription}</p>
            </div>
        </section>
    );
}
