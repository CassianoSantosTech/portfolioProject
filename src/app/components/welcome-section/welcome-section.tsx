/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import './welcome-section.css';

export default function WelcomeSection() {

    return (
        <section id="welcome" className="welcome-section">
            <div className="welcome-content">
                <div className='img-container'>
                    <img src="/me-new.jpeg" alt="Cassiano Photo" className="profile-photo" />
                </div>
                <h1>Cassiano Santos</h1>
                <p>A Full Stack Developer passionate about creating clean and efficient code.</p>
            </div>
        </section>
    );
}
