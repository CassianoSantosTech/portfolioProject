import { SocialBtns } from '../social-btns/social-btns';
import './contacts-section.css';

export default function ContactsSection() {

    const projects = [
        { name: "Project 1", link: "https://github.com/user/project1" },
        { name: "Project 2", link: "https://github.com/user/project2" },
    ]

    return (
        <section id="contacts" className="contacts-section">
            <h2>Contacts</h2>
            <SocialBtns />
        </section>
    );
}