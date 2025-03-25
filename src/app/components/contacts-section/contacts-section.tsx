import { useLanguage } from '@/contexts/ContextLanguage';
import { SocialBtns } from '../social-btns/social-btns';
import './contacts-section.css';

export default function ContactsSection() {
    const { language, translations } = useLanguage();


    return (
        <section id="contacts" className="contacts-section">
            <h2>{ translations[language].contacts }</h2>
            <SocialBtns />
        </section>
    );
}