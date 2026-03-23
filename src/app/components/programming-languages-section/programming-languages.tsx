'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/ContextLanguage';
import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '../sectionTitle/sectionTitle';
import './programming-languages.css';

const SCROLL_SPEED = 0.075; // px per ms

const languages = [
    { name: 'JavaScript', icon: '/programming-languages/js.png' },
    { name: 'TypeScript', icon: '/programming-languages/typescript.png' },
    { name: 'React', icon: '/programming-languages/react.png' },
    { name: 'Angular', icon: '/programming-languages/angular.png' },
    { name: 'Bootstrap', icon: '/programming-languages/bootstrap.png' },
    { name: 'Tailwind', icon: '/programming-languages/tailwind.png' },
    { name: 'Node.js', icon: '/programming-languages/nodejs.png' },
    { name: 'Express.js', icon: '/programming-languages/express-js-50.png' },
    { name: 'Python', icon: '/programming-languages/python.png' },
    { name: 'Java', icon: '/programming-languages/java.png' },
    { name: 'MongoDB', icon: '/programming-languages/mongodb.png' },
    { name: 'SQL', icon: '/programming-languages/sql.png' },
];

const duplicatedLanguages = [...languages, ...languages];

export default function ProgrammingLanguages() {
    const { language, translations } = useLanguage();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        let frame: number;
        let lastTimestamp = performance.now();

        function animate(now: number) {
            if (!slider) return;
            if (!isDragging) {
                const elapsed = now - lastTimestamp;
                slider.scrollLeft += SCROLL_SPEED * elapsed;
                const listLength = slider.scrollWidth / 2;
                if (slider.scrollLeft >= listLength) {
                    slider.scrollLeft -= listLength;
                }
            }
            lastTimestamp = now;
            frame = requestAnimationFrame(animate);
        }

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [isDragging]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
        document.body.style.userSelect = 'none';
    };
    const handleMouseLeave = () => {
        setIsDragging(false);
        document.body.style.userSelect = '';
    };
    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = '';
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        if (sliderRef.current) {
            const walk = (e.clientX - startX) * 1.1;
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
    };
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        if (sliderRef.current) {
            const walk = (e.touches[0].clientX - startX) * 1.1;
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <div className="programming-section">
            <SectionTitle text={translations[language].skillsAndTools} />
            <div className="programming-languages-container" style={{ overflow: 'hidden' }}>
                <div
                    className="languages-list slider"
                    ref={sliderRef}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', whiteSpace: 'nowrap' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchMove}
                >
                    {duplicatedLanguages.map((lang, index) => (
                        <div key={index} className="language-item" style={{ display: 'flex' }}>
                            <Image
                                src={lang.icon}
                                alt={lang.name}
                                width={50}
                                height={60}
                                className="language-icon"
                            />
                            <span className="language-name">{lang.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
