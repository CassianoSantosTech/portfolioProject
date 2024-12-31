import { Information } from '../information/information';
import ProgrammingLanguages from '../programming-languages-section/programming-languages';
import './about-section.css';

export default function AboutSection() {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-container">
                <div className="text-about-me">
                    <p>
                        I have over a year of experience as a Frontend Developer at a renewable energy startup. I work with modern web technologies like React and Angular to build efficient and user-friendly applications. I am proactive, communicative, and always looking for ways to help my team perform better and deliver high-quality work.
                    </p>
                    <p>
                        I am constantly learning and staying updated with new technologies. I believe in always improving and enjoy working in teams that collaborate and innovate. In my free time, I focus on staying healthy by playing basketball and surfing. These activities help me stay energized and balanced in both my personal and professional life.
                    </p>
                </div>
                <div className="more-info">
                    <Information />
                    <ProgrammingLanguages />
                </div>
            </div>
        </section>
    );
}
