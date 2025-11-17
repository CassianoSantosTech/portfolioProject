/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/contexts/ContextLanguage';
import { useState } from 'react';
import { MdExpandLess, MdExpandMore, MdLink } from 'react-icons/md';
import './projects-section.css';

export default function ProjectSection() {
    const { language, translations } = useLanguage();
    const [visibleProjects, setVisibleProjects] = useState(3);

    const projects = [
        {
            name: `${translations[language].personalPage}`,
            description: "Página construída para passar as principais informações pessoais de forma genérica, podendo facilmente ser ajustado para uma outra pessoa. Linguagens e tecnologias utilizadas: TypeScript e ReactJS!",
            sourceLink: "https://github.com/CassianoSantosTech/portfolioProject",
            demoLink: "https://cassianosantos-dev.vercel.app/",
            img: '/face-id-96.png',
            type: "Run front-end"
        },
        {
            name: "Greencycle API",
            description: "API contruída para gerenciar plataforma gestão de resíduos sólidos usando JAVA 21. Mais informações no README do projeto!",
            sourceLink: "https://github.com/CassianoSantosTech/greecycle-fiap",
            img: '/bay-leaf-96.png',
            type: "Backend-project"
        },
        {
            name: "Dev Task & Time Tracker",
            description: "Organize your daily tasks and track the time spent on each one.",
            sourceLink: "https://github.com/CassianoSantosTech/dev-task-tracker",
            demoLink: "https://chromewebstore.google.com/detail/Dev%20Task%20%26%20Time%20Tracker/bjchfgehhcaeonecaopcmbaomdndmlca",
            img: '/dev_track_icon_128.png',
            type: "Run front-end",
        },
        { name: `${translations[language].comingSoon}`, description: "Coming soon", link: "/", img: '/soon.png', disabled: true },
        { name: `${translations[language].comingSoon}`, description: "Coming soon", link: "/", img: '/soon.png', disabled: true },
        { name: `${translations[language].comingSoon}`, description: "Coming soon", link: "/", img: '/soon.png', disabled: true },
    ];

    const handleShowMore = () => {
        setVisibleProjects(prev => Math.min(prev + 3, projects.length));
    }
    const handleShowLess = () => {
        setVisibleProjects(prev => Math.max(prev - 3, 3));
    }

    const hasMoreProjects = visibleProjects < projects.length;

    return (
        <section id="projects" className="projects-section">
            <h2>{translations[language].myProjects}</h2>
            <ul>
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <li key={index}>
                        {project.disabled ? (
                            <div className="project-card disabled">
                                <span className="project-type">{project.type || "Coming soon"}</span>
                                <img src={project.img} alt={project.name} className="img-project" />
                                <span className='link-project disabled'>
                                    {project.name}
                                    <MdLink />
                                </span>
                            </div>
                        ) : (
                            <div className="project-card">
                                {project.demoLink ? (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-type run-frontend"
                                    >
                                        {project.type}
                                    </a>
                                ) : (
                                    <span className="project-type">{project.type}</span>
                                )}
                                <a
                                    href={project.sourceLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-content"
                                    style={{ marginTop: '12px' }}
                                >
                                    <img src={project.img} alt={project.name} className="img-project" />
                                    <span className='link-project'>
                                        {project.name}
                                        <MdLink />
                                    </span>
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {
                hasMoreProjects ? (
                    <div className='show-more-button-container'>
                        <button onClick={handleShowMore} className='show-more-button'>
                            {translations[language].showMore} <MdExpandMore />
                        </button>
                    </div>
                ) : (
                    <div className='show-more-button-container'>
                        <button onClick={handleShowLess} className='show-more-button'>
                            {translations[language].showLess} <MdExpandLess />
                        </button>
                    </div>
                )
            }
        </section>
    );
}