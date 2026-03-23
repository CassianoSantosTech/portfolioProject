'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/ContextLanguage';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { projects, placeholders } from '@/data/projects';
import { useState } from 'react';
import { MdExpandLess, MdExpandMore, MdLink, MdCode, MdOpenInNew } from 'react-icons/md';
import './projects-section.css';

const PAGE_SIZE = 3;

export default function ProjectSection() {
    const { language, translations } = useLanguage();
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    const visible = isVisible ? 'is-visible' : '';

    const t = translations[language];

    const allProjects = [
        ...projects.map((p) => ({
            name: p.nameKey ? t[p.nameKey] : p.name,
            description: p.description,
            sourceLink: p.sourceLink,
            demoLink: p.demoLink !== p.sourceLink ? p.demoLink : undefined,
            img: p.img,
            type: p.type,
            disabled: false as const,
        })),
        ...placeholders.map((p) => ({
            name: t.comingSoon,
            description: '',
            img: p.img,
            disabled: true as const,
        })),
    ];

    const handleShowMore = () => setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, allProjects.length));
    const handleShowLess = () => setVisibleCount((prev) => Math.max(prev - PAGE_SIZE, PAGE_SIZE));

    const hasMore = visibleCount < allProjects.length;

    return (
        <section id="projects" ref={ref} className="projects-section">
            <h2 className={`animate-fade-up ${visible}`}>{t.myProjects}</h2>
            <ul>
                {allProjects.slice(0, visibleCount).map((project, index) => (
                    <li
                        key={index}
                        className={`animate-fade-up ${visible}`}
                        style={{ '--anim-delay': `${index * 0.12}s` } as React.CSSProperties}
                    >
                        {project.disabled ? (
                            <div className="project-card project-card--disabled">
                                <div className="project-front">
                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        width={80}
                                        height={80}
                                        className="img-project"
                                    />
                                    <span className="project-name project-name--muted">
                                        {project.name}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card">
                                <div className="project-front">
                                    <span className="project-type-badge">{project.type}</span>
                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        width={80}
                                        height={80}
                                        className="img-project"
                                    />
                                    <span className="project-name">
                                        {project.name}
                                        <MdLink />
                                    </span>
                                </div>

                                <div className="project-overlay">
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-actions">
                                        <a
                                            href={project.sourceLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action-btn"
                                        >
                                            <MdCode /> Code
                                        </a>
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-action-btn project-action-btn--primary"
                                            >
                                                <MdOpenInNew /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="show-more-button-container">
                {hasMore ? (
                    <button onClick={handleShowMore} className="show-more-button">
                        {t.showMore} <MdExpandMore />
                    </button>
                ) : (
                    <button onClick={handleShowLess} className="show-more-button">
                        {t.showLess} <MdExpandLess />
                    </button>
                )}
            </div>
        </section>
    );
}
