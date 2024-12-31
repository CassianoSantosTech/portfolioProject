/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { SectionTitle } from '../sectionTitle/sectionTitle';
import './programming-languages.css';

const languages = [
    { name: 'JavaScript', icon: '/programming-languages/js.png' },
    { name: 'TypeScript', icon: '/programming-languages/typescript.png' },
    { name: 'React', icon: '/programming-languages/react.png' },
    { name: 'Angular', icon: '/programming-languages/angular.png' },
    { name: 'Bootstrap', icon: '/programming-languages/bootstrap.png' },
    { name: 'Tailwind', icon: '/programming-languages/tailwind.png' },
    { name: 'Node.js', icon: '/programming-languages/nodejs.png' },
    { name: 'Python', icon: '/programming-languages/python.png' },
    { name: 'Java', icon: '/programming-languages/java.png' },
    { name: 'MongoDB', icon: '/programming-languages/mongodb.png' },
    { name: 'SQL', icon: '/programming-languages/sql.png' },
];

export default function ProgrammingLanguages() {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    // Adjust the number of visible items based on screen size
    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth <= 768) {
                setItemsToShow(3);
            } else {
                setItemsToShow(4);
            }
        };

        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    const visibleLanguages = languages.slice(startIndex, startIndex + itemsToShow);

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) =>
            prevIndex + itemsToShow < languages.length ? prevIndex + 1 : prevIndex
        );
    };

    return (
        <div className="programming-section">
            <SectionTitle text="Skills and Tools" />
            <div className="programming-languages-container">
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="navigation-button"
                >
                    ←
                </button>
                <div className="languages-list">
                    {visibleLanguages.map((language, index) => (
                        <div key={index} className="language-item">
                            <img
                                src={language.icon}
                                alt={language.name}
                                className="language-icon"
                            />
                            <span className="language-name">{language.name}</span>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    disabled={startIndex + itemsToShow >= languages.length}
                    className="navigation-button"
                >
                    →
                </button>
            </div>
        </div>
    );
}
